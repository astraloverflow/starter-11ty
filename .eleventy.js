const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (config) {
  config.setDataDeepMerge(true);
  config.addPassthroughCopy('img');

  config.addPlugin(pluginSyntaxHighlight);

  return {
    dir: {
      input: 'src',
      includes: '../_includes',
      data: '../_data',
    },
  };
};
