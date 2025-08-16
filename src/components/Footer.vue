<script setup>
import { Github, Linkedin, Facebook, Instagram } from "lucide-vue-next";
</script>

<template>
  <footer class="bg-secondary border-t border-primary/50 py-8">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-text-secondary"
    >
      <div class="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com/Ipanha"
          target="_blank"
          class="hover:text-accent transition-colors"
          ><Github size="24"
        /></a>
        <a
          href="https://www.linkedin.com/in/chet-panha-2ba80730a/"
          target="_blank"
          class="hover:text-accent transition-colors"
          ><Linkedin size="24"
        /></a>
        <a
          href="https://www.facebook.com/ak.mp.7587"
          target="_blank"
          class="hover:text-accent transition-colors"
          ><Facebook size="24"
        /></a>
        <a
          href="https://www.instagram.com/iamzanha/"
          target="_blank"
          class="hover:text-accent transition-colors"
          ><Instagram size="24"
        /></a>
      </div>
      <p>
        &copy; {{ new Date().getFullYear() }} Chet Panha. All Rights Reserved.
      </p>
      <p class="text-sm mt-1">Crafted with ❤️ using Vue.js & Tailwind CSS</p>
    </div>
  </footer>
</template>
