module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['.nuxt', 'coverage/*', 'vendor/*', 'dist/*'],
  plugins: ['vue', '@typescript-eslint'],
  // add your custom rules here
  rules: {
    'no-console': 0, // on autorise les appels à la console (puisque ceux-ci seront de toute façon nettoyés à la compilation)
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true,
      },
    ],
    'vue/multi-word-component-names': 0,
    'vue/no-v-html': 0,
    '@typescript-eslint/ban-ts-comment': 0,
  },
  globals: {
    useRuntimeConfig: 'readonly',
    navigateTo: 'readonly',
    computed: 'readonly',
    ref: 'readonly',
    definePageMeta: 'readonly',
    useRouter: 'readonly',
    useRoute: 'readonly',
    useI18n: 'readonly',
    onMounted: 'readonly',
    useLayoutStore: 'readonly',
    useClientDevice: 'readonly',
    useSeoMeta: 'readonly',
  },
}
