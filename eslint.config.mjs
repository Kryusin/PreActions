import js from '@eslint/js';
import globals from 'globals';
import pluginImport from 'eslint-plugin-import';

export default [
  js.configs.recommended,
  {
    files: ['template/**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        jest: 'readonly', // Jest グローバルを追加
        describe: 'readonly', // 必要に応じて追加
        it: 'readonly', // 必要に応じて追加
        test: 'readonly', // 必要に応じて追加
        expect: 'readonly', // 必要に応じて追加
        module: 'readonly', // 必要に応じて追加
      },
    },
    plugins: {
      import: pluginImport,
    },
    rules: {
      'no-unused-vars': 'warn',
      'prefer-const': 'error',
      '@/no-unused-vars': 'warn',  // 注意: このルールは 'import/no-unused-modules' が通常推奨
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      indent: ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
      'arrow-parens': ['error', 'always'],
      'no-var': 'error',
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'max-len': ['warn', { code: 100 }],
    },
  },
];
