module.exports = {
  env: {
    node: true,
    browser: true,
    jest: true,
    es6: true,
  },
  extends: [
    'custom',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'next',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    sourceType: 'module',
  },
  ignorePatterns: [],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    // 'react/jsx-key': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
