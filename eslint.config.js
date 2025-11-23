import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import astroParser from 'astro-eslint-parser';
import astroPlugin from 'eslint-plugin-astro';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import tailwindcssPlugin from 'eslint-plugin-tailwindcss';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';

// Shared rules for TypeScript and Astro files
const sharedTypeScriptRules = {
  // Prettier
  ...prettierConfig.rules,
  'prettier/prettier': 'error',

  // Import/Export sorting
  'simple-import-sort/imports': 'error',
  'simple-import-sort/exports': 'error',

  // Unused imports
  '@typescript-eslint/no-unused-vars': 'off',
  'unused-imports/no-unused-imports': 'error',
  'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

  // Import rules
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
      astro: 'never',
    },
  ],
  'import/prefer-default-export': 'off',

  // TypeScript rules
  '@typescript-eslint/comma-dangle': 'off',

  // Tailwind rules
  'tailwindcss/classnames-order': [
    'warn',
    {
      officialSorting: true,
    },
  ],
};

const sharedPlugins = {
  '@typescript-eslint': tsPlugin,
  'unused-imports': unusedImportsPlugin,
  tailwindcss: tailwindcssPlugin,
  'simple-import-sort': simpleImportSortPlugin,
  import: importPlugin,
  prettier: prettierPlugin,
};

const sharedSettings = {
  'import/resolver': {
    typescript: {
      alwaysTryTypes: true,
      project: './tsconfig.json',
    },
  },
};

export default [
  // Global ignores
  {
    ignores: ['node_modules/**', 'dist/**', '.astro/**'],
  },

  // Base JavaScript config
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    plugins: {
      prettier: prettierPlugin,
    },
    settings: sharedSettings,
    rules: {
      ...js.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },

  // TypeScript/TSX config
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      ...sharedPlugins,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    settings: {
      ...sharedSettings,
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...sharedTypeScriptRules,

      // React-specific rules
      'react/destructuring-assignment': 'off',
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },

  // Astro config - uses plugin's recommended preset
  ...astroPlugin.configs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        extraFileExtensions: ['.astro'],
      },
      globals: {
        Astro: 'readonly',
      },
    },
    plugins: sharedPlugins,
    settings: sharedSettings,
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...sharedTypeScriptRules,

      // Astro-specific import resolution
      'import/no-unresolved': [
        'error',
        {
          ignore: ['^@/', '^astro:'],
        },
      ],
    },
  },
];
