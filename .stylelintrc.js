module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-no-unsupported-browser-features', 'stylelint-order'],
  rules: {
    // Warn when using features not supported by browserlist selection (see package.json)
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
      },
    ],
    // Enforce grouping by type
    'order/order': [
      'dollar-variables',
      'custom-properties',
      'declarations',
      'rules',
      'at-rules',
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
  ignoreFiles: ['node_modules/**', 'dist/**'],
};
