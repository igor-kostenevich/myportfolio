<script setup lang="ts">
const links = [
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/igor-kostenevich/',
    icon: 'linkedin-footer',
    label: 'LinkedIn',
  },
  {
    id: 'telegram',
    href: 'https://t.me/ikostenevich',
    icon: 'telegram',
    label: 'Telegram'
  }
]

function track(id: 'linkedin' | 'telegram') {
  if (typeof window !== 'undefined' && (window as any).plausible) {
    (window as any).plausible('clicked_contact_' + id)
  }
}
</script>

<template>
  <div
    class="fixed z-50 flex md:flex-col gap-4 print:hidden
           right-4 md:right-6 bottom-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2"
    style="right: max(16px, env(safe-area-inset-right));"
  >
    <div
      v-for="l in links"
      :key="l.id"
      class="group relative"
    >
      <span
        class="absolute inset-0 p-[2px] rounded-full
               bg-[conic-gradient(from_0deg,#60a5fa,#a78bfa,#f472b6,#60a5fa)]
               animate-spin-slow opacity-70
               group-hover:opacity-100 transition"
        aria-hidden="true"
      ></span>

      <span
        class="absolute inset-0 rounded-full blur-md opacity-0
               group-hover:opacity-80 transition
               bg-gradient-to-tr from-indigo-500/25 via-sky-400/25 to-fuchsia-500/25"
        aria-hidden="true"
      ></span>

      <a
        :href="l.href"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="l.label"
        :title="l.label"
        class="relative inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14
               rounded-full bg-neutral-900 text-white shadow-xl ring-1 ring-white/10
               hover:scale-105 active:scale-[0.98] transition
               backdrop-blur-sm"
        @click="track(l.id as 'linkedin' | 'telegram')"
      >
        <SvgIcon :name="l.icon" class="w-5 h-5 md:w-6 md:h-6" />
        <span class="sr-only">{{ l.label }}</span>

        <span
          class="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2
                 px-3 py-1.5 rounded-xl text-xs font-medium
                 bg-white/10 text-white/95 border border-white/15 backdrop-blur
                 opacity-0 translate-x-2 transition
                 group-hover:opacity-100 group-hover:translate-x-0 hidden sm:inline"
        >
          {{ l.label }}
        </span>
      </a>
    </div>
  </div>
</template>

<style>
@keyframes spin-slow { to { transform: rotate(1turn); } }
.animate-spin-slow { animation: spin-slow 8s linear infinite; }

@media (prefers-reduced-motion: reduce) {
  .animate-spin-slow { animation: none !important; }
  .transition, .hover\:scale-105, .active\:scale-\[0\.98\] { transition: none !important; }
}
</style>
