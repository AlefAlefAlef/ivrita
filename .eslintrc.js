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
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    jQuery: true,
  },
  rules: {
    'no-param-reassign': [2, { props: false }],
    'no-new': [0],
    'no-underscore-dangle': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/setup-jest.js'] }], // Allow importing jQuery in Jest setup file
    'lines-between-class-members': 0,
  },
};
