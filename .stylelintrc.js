module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-no-unsupported-browser-features', 'stylelint-order'],
  rules: {
    // Error when using features not supported by browserlist selection (see package.json)
    'plugin/no-unsupported-browser-features': true,
    // Enforce alphabetical property order + grouping by type
    'order/properties-alphabetical-order': true,
    'order/order': [
      'dollar-variables',
      'custom-properties',
      'declarations',
      'at-rules',
      'rules',
    ],
    // Error on unknown html elements unless they match custom elements pattern
    // e.g. <my-element />
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
      },
    ],
    // Set to null if using something like tailwind's postcss module
    'at-rule-no-unknown': null,
  },
  ignoreFiles: ['node_modules/**', '_site/**'],
};
