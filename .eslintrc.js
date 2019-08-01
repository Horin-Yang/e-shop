module.exports = {
  // 仅使用本配置
  root: true,
  // 文件解析器
  parser: 'vue-eslint-parser',
  parserOptions: {
    // 对 JavaScript 使用 babel-eslint
    'parser': 'babel-eslint',
    // 指定 JavaScript 的 Ecmascript 版本
    'ecmaVersion': 2017,
    // 使用 import/export 语法
    'sourceType': 'module'
  },
  // 全局环境对象
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    'standard',
    // https://github.com/vuejs/eslint-plugin-vue#bulb-rules
    'plugin:vue/recommended',
  ],
  // 自定义规则
  rules: {
    // https://github.com/babel/babel-eslint/issues/517
    'no-use-before-define': 'off',
    'comma-dangle': ['error', 'always-multiline'],
  },
}
