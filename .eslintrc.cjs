/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  //  表示这个配置文件是 ESLint 配置的根配置文件，不再往上寻找其他配置文件。
  root: true,
  //  继承其他 ESLint 配置，这里包括了 Vue.js 项目常用的一些配置
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  // 指定解析器选项，这里设置了 ECMAScript 版本为最新版本
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/component-name-in-template-casing': 'off', // 不再对模板中组件名称的命名规范做强制性检查。
    'vue/multi-word-component-names': 'off' // 不再对组件名是否使用了多个单词做强制性检查
  }
}
