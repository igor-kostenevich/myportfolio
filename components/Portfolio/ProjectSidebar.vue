<script setup lang="ts">
const props = defineProps({
  project: {
    type: Object,
    default: () => ({}),
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close'])

const closeSidebar = () => emit('close')

const getYoutubeEmbedUrl = (url: string): string => {
  const regExp = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^\s&?]+)/
  const match = url.match(regExp)
  return match ? `https://www.youtube.com/embed/${match[1]}` : ''
}

watch(
  () => props.isOpen,
  open => {
    document.body.classList.toggle('sidebar-open', open)
  },
)
</script>

<template>
  <Teleport to="body">
    <transition name="slide">
      <aside
        v-if="isOpen"
        class="fixed inset-0 bg-opacity-50 z-[999]"
        @click.self="closeSidebar"
      >
        <div class="fixed top-0 right-0 h-full bg-gray-50 w-full md:max-w-[80vw] overflow-y-auto px-8 py-10 transition-transform duration-300 z-50">
          <div class="mb-8 lg:mb-16">
            <h2 class="text-dark-additional text-2xl md:text-3xl lg:text-5xl uppercase font-medium tracking-tight pr-12 lg:pr-20">{{ project.title }}</h2>
            <button @click="closeSidebar">
              <SvgIcon
                name="close"
                class="absolute top-6 mt-1 right-4 cursor-pointer"
              />
            </button>
          </div>
          <div class="lg:flex gap-32 mb-20 w-full">
            <div
              class="project-description mb-8 lg:mb-0 lg:max-w-[608px] text-gray-500 tracking-tight"
              v-html="project.longDescription"
            />
            <div class="w-full">
              <div class="flex pt-4 pb-8 border-b border-gray-150">
                <h4 class="uppercase text-sm text-gray-250 font-space-mono min-w-40">My Role</h4>
                <p class="text-gray-500 tracking-tight text-sm">{{ project.myRole }}</p>
              </div>
              <div class="flex pb-8 pt-4 border-b border-gray-150">
                <h4 class="uppercase text-sm text-gray-250 font-space-mono min-w-40">Industries</h4>
                <div class="text-gray-500 tracking-tight text-sm">
                  <ul>
                    <li
                      v-for="industry in project.industries"
                      :key="industry"
                      class="mb-1"
                    >
                      {{ industry }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex pb-8 pt-4 border-b border-gray-150">
                <h4 class="uppercase text-sm text-gray-250 font-space-mono min-w-40">techstack</h4>
                <div class="text-gray-500 tracking-tight text-sm">
                  <ul>
                    <li
                      v-for="stack in project.techStack"
                      :key="stack"
                      class="mb-1"
                    >
                      {{ stack }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex pt-4 pb-8 border-b border-gray-150">
                <h4 class="uppercase text-sm text-gray-250 font-space-mono min-w-40">View on github</h4>
                <a
                  :href="project.links.github"
                  target="_blank"
                  class="text-gray-500 tracking-tight text-sm hover:underline"
                  >{{ project.links.github }}</a
                >
              </div>
              <div class="flex pt-4 pb-8 border-b border-gray-150">
                <h4 class="uppercase text-sm text-gray-250 font-space-mono min-w-40">Live</h4>
                <ul v-if="Array.isArray(project.links.live)">
                  <li
                    v-for="link in project.links.live"
                    :key="link"
                  >
                    <a
                      :href="link"
                      target="_blank"
                      class="text-gray-500 tracking-tight text-sm hover:underline"
                      >{{ link }}</a
                    >
                  </li>
                </ul>
                <a
                  v-else
                  :href="project.links.live"
                  target="_blank"
                  class="text-gray-500 tracking-tight text-sm hover:underline"
                  >{{ project.links.live }}</a
                >
              </div>
            </div>
          </div>
          <ul v-if="project.images.length">
            <li
              v-for="(image, index) in project.images"
              :key="index"
              class="mb-5"
            >
              <img
                :src="image"
                alt="project image"
              />
            </li>
          </ul>
          <div v-if="project.videos.length">
            <div
              v-for="(video, index) in project.videos"
              :key="index"
              class="aspect-video w-full mb-4"
            >
              <iframe
                class="w-full h-full"
                :src="getYoutubeEmbedUrl(video)"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </aside>
    </transition>
  </Teleport>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateX(0%);
}
</style>
