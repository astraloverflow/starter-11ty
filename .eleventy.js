const plugindirectoryOutput = require('@11ty/eleventy-plugin-directory-output');
const toml = require('toml');

const markdownItAnchor = require('markdown-it-anchor');
const pluginTimeToRead = require('eleventy-plugin-time-to-read');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginRev = require('eleventy-plugin-rev');
const htmlmin = require('html-minifier');

const eleventySass = require('eleventy-sass');
const postcss = require('postcss');

const isProduction = process.env.NODE_ENV === 'production';
// const isProduction = true;

module.exports = function (config) {
  config.setQuietMode(true);
  config.addPlugin(plugindirectoryOutput);

  config.addPassthroughCopy('src/_images');

  // When `permalink` is false, the file is not written to disk
  config.addGlobalData('eleventyComputed.permalink', function () {
    return (data) => {
      // Always skip during non-watch/serve builds
      if (data.draft && !process.env.BUILD_DRAFTS) {
        return false;
      }

      return data.permalink;
    };
  });

  // When `eleventyExcludeFromCollections` is true, the file is not included in any collections
  config.addGlobalData(
    'eleventyComputed.eleventyExcludeFromCollections',
    function () {
      return (data) => {
        // Always exclude from non-watch/serve builds
        if (data.draft && !process.env.BUILD_DRAFTS) {
          return true;
        }

        return data.eleventyExcludeFromCollections;
      };
    }
  );

  config.on('eleventy.before', ({ runMode }) => {
    // Set the environment variable
    if (runMode === 'serve' || runMode === 'watch') {
      process.env.BUILD_DRAFTS = true;
    }
  });

  config.addDataExtension('toml', (contents) => toml.parse(contents));
  config.amendLibrary('md', (mdLib) =>
    mdLib.use(markdownItAnchor, {
      tabIndex: false,
    })
  );

  config.addPlugin(pluginTimeToRead, {
    language: 'en',
    speed: '200 words a minute',
    style: 'short',
  });
  config.addPlugin(pluginSyntaxHighlight);
  config.addPlugin(pluginRss, {
    posthtmlRenderOptions: {
      closingSingleTag: 'slash',
    },
  });
  config.addPlugin(pluginRev);

  if (isProduction) {
    config.addTransform('htmlmin', function (content) {
      if (
        this.page.outputPath &&
        (this.page.outputFileExtension === 'html' ||
          this.page.outputPath.endsWith('feed.xml'))
      ) {
        let minified = htmlmin.minify(content, {
          collapseWhitespace: true,
          conservativeCollapse: true,
        });
        return minified;
      }
      return content;
    });
  }

  let sassOptions = {
    sass: {
      style: 'expanded',
      sourceMap: false,
    },
    rev: true,
  };

  if (isProduction) {
    sassOptions = {
      ...sassOptions,
      postcss: postcss([
        require('@fullhuman/postcss-purgecss')({
          content: ['dist/**/*.html'],
        }),
        require('autoprefixer'),
        require('cssnano')({ preset: 'default' }),
      ]),
    };
  }

  config.addPlugin(eleventySass, sassOptions);

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_layouts',
    },

    // pathPrefix: 'blog',

    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
};
