import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    ignorePatterns: ['node_modules/', 'dist/', 'build/', '**rc.*'],
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'prettier',
      'plugin:prettier/recommended',
    ],
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    plugins: ['prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  }),
];

export default eslintConfig;
