<script setup lang="ts">
// eslint-disable-next-line no-unused-vars
import { NuxtLink } from '#components'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
  to: {
    type: [String, Object],
    default: null,
  },
  href: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
})

const classes = computed(() => {
  const baseClass = 'group/button flex items-center justify-center px-7 py-4 rounded-full transition-colors duration-200'
  const disabledClass = props.disabled ? 'opacity-90 !cursor-not-allowed pointer-events-none' : ''

  const variants: Record<string, string> = {
    outline: 'bg-transparent border border-white text-white text-sm font-medium',
    secondary:
      'bg-primary-dark text-secondary-dark uppercase group inline-block relative overflow-hidden px-5 py-3 rounded-full text-secondary-dark uppercase tracking-wide bg-[#05E2BF] transition-all duration-300 ease-out z-10',
    default: 'bg-white text-secondary-dark text-sm font-medium text-sm',
  }

  const hoverClasses: Record<string, string> = {
    outline: 'hover:bg-primary-dark hover:text-black hover:border-primary-dark',
    secondary: 'hover:text-white',
    default: 'hover:bg-primary-dark',
  }

  return [
    baseClass,
    disabledClass || variants[props.variant] || variants.default,
    !props.disabled ? hoverClasses[props.variant] || hoverClasses.default : '',
  ].join(' ')
})

const tag = computed(() => (props.to ? resolveComponent('NuxtLink') : props.href ? 'a' : 'button'))
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :disabled="disabled"
    :class="classes"
    v-bind="$attrs"
  >
    <template v-if="isLoading">
      <svg
        class="animate-spin -ml-1 mr-3 h-6 w-6 text-current"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        />
      </svg>
    </template>
    <template v-else>
      <slot name="left" />
      <span class="inline-flex items-center relative z-10"><slot /></span>
      <slot name="right" />
      <span
        v-if="variant === 'secondary'"
        class="absolute inset-0 w-0 bg-[#03b9a0] transition-all duration-300 ease-out group-hover:w-full"
      />
    </template>
  </component>
</template>
