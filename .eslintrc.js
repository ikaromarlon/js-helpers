module.exports = {
  root: true,
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-eval': 1,
    'import/newline-after-import': 0,
    'global-require': 0,
    'no-tabs': 0,
    'consistent-return': 'off',
    'prefer-promise-reject-errors': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-continue': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'func-names': 'off',
    'no-multi-spaces': 'off',
    'spaced-comment': ['error', 'always', {
      'markers': ['/'],
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'padded-blocks': 'off',
    'linebreak-style': 'off',
    'class-methods-use-this': 'off',
    'indent': ['error', 2],
    'max-len': ['error', 180, 2, {
      ignoreComments: true,
    }],
    'no-unused-vars': ['error', {
      vars: 'local',
      args: 'after-used',
    }],
    'no-multiple-empty-lines': ['error', {
      max: 2,
      maxEOF: 1,
    }],
    'no-nested-ternary': 'off',
    'no-underscore-dangle': ['off', {
      'allow': ['_super', '_lookupFactory'],
    }],
    'object-shorthand': ['error', 'methods'],
    'no-unused-expressions': 'off',
  },
};
