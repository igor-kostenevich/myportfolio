<script setup lang="ts">
import { computed } from 'vue'
const { locale, setLocale } = useI18n()

const options = [
  { code: 'en', label: 'EN' },
  { code: 'uk', label: 'UK' },
] as const

const current = computed(() => (locale.value as 'en' | 'uk'))

function select(code: 'en' | 'uk') {
  if (code !== current.value) setLocale(code)
}
</script>

<template>
  <div
    class="inline-flex items-center rounded-full border border-white/15 bg-white/5 backdrop-blur px-1 py-1 text-xs lg:text-sm text-white/90 shadow-sm"
    role="tablist"
    aria-label="Language"
  >
    <button
      v-for="o in options"
      :key="o.code"
      :aria-selected="current === o.code"
      class="min-w-[44px] px-3 py-1 rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
      :class="current === o.code ? 'bg-white/15' : 'hover:bg-white/10'"
      @click="select(o.code as any)"
    >
      {{ o.label }}
    </button>
  </div>
</template>
