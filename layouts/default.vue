<script setup lang="ts">
useHead({
  script: [
    {
      src: 'https://analytics.family-love-haven.com/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js',
      defer: true,
      'data-domain': 'family-love-haven.com',
    },
    {
      children: `
        window.plausible = window.plausible || function() {
          (window.plausible.q = window.plausible.q || []).push(arguments)
        }
      `
    }
  ]
})

onMounted(() => {
  const timers = [
    setTimeout(() => {
      window.plausible?.('engaged_site', { props: { duration: '15s+' } })
    }, 15000),

    setTimeout(() => {
      window.plausible?.('engaged_site', { props: { duration: '30s+' } })
    }, 30000),

    setTimeout(() => {
      window.plausible?.('engaged_site', { props: { duration: '1min+' } })
    }, 60000),
  ]

  onBeforeUnmount(() => timers.forEach(clearTimeout))
})

</script>

<template>
  <div class="min-h-screen bg-secondary-dark">
    <BaseHeader />
    <main>
      <slot />
    </main>
    <BaseFooter />
  </div>
</template>
