module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'compat', 'security', 'unicorn'],
  extends: [
    // Typescript recommended rules
    'plugin:@typescript-eslint/recommended',
    // Standardjs JavaScript Coding Style (with semicolons)
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
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prevent-abbreviations': 'off',
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
  ignorePatterns: ['!.eslintrc.js', 'dist/**'],
};
