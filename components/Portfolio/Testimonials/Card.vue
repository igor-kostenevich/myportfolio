<script setup lang="ts">
interface Testimonial {
  name: string
  role: string
  avatar?: string
  companyLogo?: string
  text: string
}

defineProps<{
  data: Testimonial
}>()
</script>

<template>
  <div class="flex flex-col bg-white text-gray-500 rounded-lg p-4 sm:p-8 w-[350px] sm:w-[700px] shrink-0 min-h-[240px] sm:min-h-[256px]">
    <p class="text-sm sm:text-lg mb-6 flex-1">
      {{ data.text }}
    </p>

    <div class="flex items-center gap-6 mt-auto">
      <img
        v-if="data.avatar"
        :src="`/avatars/${data.avatar}.webp`"
        alt="avatar"
        class="h-14 w-14 rounded-full object-cover"
      />
      <div class="flex flex-col">
        <div class="font-medium text-secondary-dark text-lg sm:text-xl">
          {{ data.name }}
        </div>
        <div class="text-sm sm:text-bse text-gray-250">
          {{ data.role }}
        </div>
      </div>
    </div>
  </div>
</template>
