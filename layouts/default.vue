<template>
  <div class="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
    <header class="p-4 bg-gray-800 text-white flex justify-between">
      <h1>Мой сайт</h1>
      <NuxtLink to="/">Главная</NuxtLink>
    </header>

    <main class="p-4">
      <slot />
    </main>
  </div>
</template>