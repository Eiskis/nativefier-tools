module.exports = {
  env: {
    commonjs: true,
    es6: false,
    node: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    'ecmaVersion': 2018
  },
  rules: {
    'padded-blocks': 'off'
  }
}
