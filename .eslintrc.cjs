/*
 * @Description: 
 * @Author: yuyi
 * @Date: 2024-06-16 14:24:42
 * @LastEditors: yuyi
 * @LastEditTime: 2024-06-16 21:40:35
 */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: false,
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
