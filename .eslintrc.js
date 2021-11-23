module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'comma-dangle': 'off',
    'class-methods-use-this': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/prefer-default-export': 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        ignores: [],
      },
    ],
    'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
  },
  // env: {
  //   browser: true,
  // },
  // extends: ['plugin:vue/essential', 'airbnb-base', 'plugin:import/recommended'],
  // parserOptions: {
  //   ecmaVersion: 2020,
  //   sourceType: 'module',
  //   allowImportExportEverywhere: true,
  // },
  // plugins: ['vue', 'import'],
  // rules: {
  //   'operator-linebreak': ['error', 'after'],
  //   'import/no-unresolved': 'off',
  //   'implicit-arrow-linebreak': 'off',
  // },
  // settings: {
  //   'import/extensions': ['.js', '.jsx', '.vue'],
  //   'import/no-unresolved': 'off',
  //   'import/resolver': {
  //     node: {
  //       // paths: ['src'],
  //       extensions: ['.js', '.jsx', '.vue', '.tsx'],
  //     },
  //   },
  //   // 'import/resolver': 'webpack',
  // },
};
