module.exports = {
  env: {
    node: true,
    jest: true,
  },
  extends: ['custom'],
  plugins: ['@typescript-eslint', 'prettier'],
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  ignorePatterns: [],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
