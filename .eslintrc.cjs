module.exports = {
  env: {
    node: true,
  },
  globals: {
    defineNuxtConfig: 'readonly',
    definePageMeta: 'readonly',
    useFetch: 'readonly',
    useAsyncData: 'readonly',
    useRoute: 'readonly',
    useRouter: 'readonly',
    useHead: 'readonly',
    useSeoMeta: 'readonly',
    useState: 'readonly',
    useCookie: 'readonly',
    useRuntimeConfig: 'readonly',
    useNotification: 'readonly',
    resolveComponent: 'readonly',
    ref: 'readonly',
    computed: 'readonly',
    reactive: 'readonly',
    watch: 'readonly',
    watchEffect: 'readonly',
    onMounted: 'readonly',
    onBeforeUnmount: 'readonly',
    useHelpers: 'readonly',
    onUnmounted: 'readonly',
    nextTick: 'readonly',
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
    $fetch: 'readonly',
    useScrollTo: 'readonly',

    // Pinia stores
    usePortfolioStore: 'readonly',
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // override/add rules settings here, such as:
    'no-debugger': 'off',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true, varsIgnorePattern: '_', argsIgnorePattern: '^_' }],
    'vue/no-template-shadow': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-useless-template-attributes': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-reserved-component-names': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-parsing-error': ['error', { 'x-invalid-end-tag': false }],
    'vue/no-v-html': 'off',
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'any',
        },
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
  },
}
