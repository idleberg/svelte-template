module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'parserOptions': {
    'ecmaVersion': '2019',
    'sourceType': 'module'
  },
  'extends': 'eslint:recommended',
  'plugins': [
    'svelte3'
  ],
  'overrides': [
    {
      'files': ['**/*.svelte'],
      'processor': 'svelte3/svelte3'
    }
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
}
