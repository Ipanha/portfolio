<script setup>
import { Link, Github } from 'lucide-vue-next';

defineProps({
  project: Object,
});
</script>

<template>
  <div class="bg-primary rounded-lg overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/20">
    <div class="overflow-hidden">
        <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
      <p class="text-text-secondary text-sm mb-4">{{ project.description }}</p>
      
      <div class="flex flex-wrap gap-2 mb-6">
        <span v-for="tag in project.tags" :key="tag" class="bg-secondary text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
          {{ tag }}
        </span>
      </div>
      
      <div class="flex space-x-4">
        <a :href="project.liveUrl" class="flex-1 text-center bg-accent text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-500 transition-colors flex items-center justify-center gap-2">
          <Link size="16" /> Live
        </a>
        <a :href="project.codeUrl" class="flex-1 text-center bg-secondary text-text-main px-4 py-2 rounded-md font-medium hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
          <Github size="16" /> Code
        </a>
      </div>
    </div>
  </div>
</template>