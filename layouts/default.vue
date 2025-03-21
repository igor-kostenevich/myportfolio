<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-secondary-dark">
    <!-- <header class="p-4 bg-gray-800 text-white flex justify-between">
      <h1>Мой сайт</h1>
      <NuxtLink to="/">Главная</NuxtLink>
    </header> -->

    <main>
      <slot />
    </main>
    <BaseFooter />
  </div>
</template>