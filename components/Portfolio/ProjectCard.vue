<script setup>
defineProps({
  project: {
    type: Object,
    default: () => ({}),
  },
  isFirstProject: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="group bg-secondary-dark pb-10 rounded-[40px] overflow-hidden shadow-lg">
    <div :class="['mb-7 relative overflow-hidden', isFirstProject ? 'pb-[55%]' : 'pb-[78%]']">
      <img
        :src="project.image"
        alt="Project Image"
        class="w-full h-full object-cover absolute inset-0 group-hover:scale-100 scale-105 transition"
      />
    </div>
    <div
      class="flex flex-col xl:flex-row xl:items-center justify-between px-6 gap-5 md:gap-10"
      :class="{ 'mt-10': isFirstProject }"
    >
      <div class="xl:w-2/3">
        <h3 class="text-xl md:text-2xl group-hover:text-primary-dark tracking-tight font-medium mb-2.5 transition">{{ project.title }}</h3>
        <p class="text-gray-100 text-sm md:text-base">{{ project.description }}</p>
      </div>
      <BaseButton
        variant="outline"
        class="group/button min-w-max w-full xl:w-auto"
      >
        View Case
        <SvgIcon
          name="arrow-right"
          class="transition-transform group-hover/button:-rotate-45 ml-2 w-4 h-4"
        />
      </BaseButton>
    </div>
  </div>
</template>
