module.exports = {
  env: {
    node: true,
    es2021: true
  },
  extends: [
    //'plugin:@typescript-eslint/recommended',
    'standard-with-typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    //no-namespace: { allowDeclarations: false, allowDefinitionFiles: true }
  }
}
