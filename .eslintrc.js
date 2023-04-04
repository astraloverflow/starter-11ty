// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  root: true,
  plugins: ['compat', 'security', 'unicorn'],
  extends: [
    // Standardjs JavaScript Coding Style (with semicolons!)
    'semistandard',
    // Error when using features not supported by browserlist selection (see package.json)
    'plugin:compat/recommended',
    // Some useful rules to avoid JavaScript security issues
    'plugin:security/recommended',
    // A mishmash of useful rules
    'plugin:unicorn/recommended',
    // Unsets rules that conflict with Prettier
    // _MUST_ always come last
    'prettier',
  ],
  rules: {
    'no-unused-vars': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    curly: ['error', 'all'],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'SequenceExpression',
        message:
          'Sequence expressions (the comma operator) are not allowed. See eslint no-sequences.',
      },
    ],
  },
  ignorePatterns: ['!.eslintrc.js', 'node_modules/**', 'dist/**'],
};
