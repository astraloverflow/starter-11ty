const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const htmlmin = require('html-minifier');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = function (config) {
  config.setDataDeepMerge(true);
  config.addPassthroughCopy('src/_images');

  config.addPlugin(pluginSyntaxHighlight);

  if (isProduction) {
    config.addTransform('htmlmin', function (content, outputPath) {
      if (outputPath.endsWith('.html')) {
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
    dir: {
      input: 'src',
      includes: '../_templates',
      data: '../_data',
    },
  };
};
