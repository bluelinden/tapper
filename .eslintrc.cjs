module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    './node_modules/gts'
  ],
  'overrides': [
  ],
  'ignorePatterns': ['dist/'],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  }
};
