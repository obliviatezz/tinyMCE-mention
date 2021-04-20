
module.exports = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  env: {
    browser: true,
  },
  extends: ['plugin:vue/essential'],
  plugins: [
    'vue',
    '@typescript-eslint',
    'typescript'
  ],
  // add your custom rules here
  rules: {
    // js语句结尾必须使用 ;
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    // 强制在 function的左括号之前使用一致的空格
    'space-before-function-paren': 0,
    // 引号类型
    "quotes": [0, "single"],
    // 全等号
    "eqeqeq": 2
  },
  //   "eslint.validate": [
  //     "javascript",
  //     "javascriptreact",
  //     "typescript",
  //     "typescriptreact"
  // ]
};