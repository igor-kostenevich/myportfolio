<template>
  <div class="min-h-screen bg-gray-100 text-black">
    <header class="p-4 bg-red-600 text-white">
      <h1>Панель администратора</h1>
      <NuxtLink to="/">На сайт</NuxtLink>
    </header>

    <main class="p-4">
      <slot />
    </main>
  </div>
</template>