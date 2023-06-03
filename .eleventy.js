const directoryOutput = require('@11ty/eleventy-plugin-directory-output');

const postcss = require('postcss');
const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const markdownItAnchor = require('markdown-it-anchor');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const htmlmin = require('html-minifier');

module.exports = function (config) {
  const isProduction = process.env.NODE_ENV === 'production';
  // const isProduction = true;

  config.setQuietMode(true);
  config.addPlugin(directoryOutput);

  config.addPassthroughCopy('src/_assets');

  config.addFilter('postcss', async function (input) {
    return await postcss([
      tailwind(),
      autoprefixer(),
      cssnano({ preset: 'default' }),
    ])
      .process(input, {
        from: undefined,
      })
      .then((r) => r.css);
  });
  config.addWatchTarget('./src/_includes/**/*.css');

  config.amendLibrary('md', (mdLib) =>
    mdLib.use(markdownItAnchor, {
      tabIndex: false,
    })
  );
  config.addPlugin(syntaxHighlight);

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

  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',

    // pathPrefix: 'blog',
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
