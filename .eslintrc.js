module.exports = {
  parser: 'babel-eslint',
  plugins: ['jest'],
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-param-reassign': [2, { props: false }],
  },
};
