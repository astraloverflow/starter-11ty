module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
  plugins: ['stylelint-no-unsupported-browser-features', 'stylelint-order'],
  rules: {
    // Error when using features not supported by browserlist selection (see package.json)
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
      },
    ],
    // Enforce alphabetical property order + grouping by type
    'order/properties-alphabetical-order': true,
    'order/order': [
      'dollar-variables',
      'custom-properties',
      'declarations',
      'at-rules',
      'rules',
    ],
    // Set to null if using something like tailwind's postcss module
    'at-rule-no-unknown': null,
  },
  ignoreFiles: ['node_modules/**', 'dist/**'],
};
