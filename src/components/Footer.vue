<script setup>
import { Github, Linkedin, Facebook, Instagram, Youtube } from "lucide-vue-next";
</script>

<template>
  <footer class="bg-secondary border-t border-primary/50 py-8">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-text-secondary"
    >
      <div class="flex justify-center space-x-6 mb-4">
        <a
          href="https://www.youtube.com/@Chet_Panha"
          target="_blank"
          class="hover:text-accent transition-colors"
        >
          <Youtube class="w-6 h-6" />
        </a>
        <a
          href="https://www.tiktok.com/@chet_panha"
          target="_blank"
          class="hover:text-accent transition-colors"
        >
          <i class="bi bi-tiktok text-gray-400 hover:text-blue-500 text-xl"></i>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100088538084724"
          target="_blank"
          class="hover:text-accent transition-colors"
        >
          <Facebook class="w-6 h-6" />
        </a>
        <a
          href="https://www.instagram.com/iamzanha/"
          target="_blank"
          class="hover:text-accent transition-colors"
        >
          <Instagram class="w-6 h-6" />
        </a>
        <a
          href="https://github.com/Ipanha"
          target="_blank"
          class="hover:text-accent transition-colors"
        >
          <Github class="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/chet-panha-2ba80730a/"
          target="_blank"
          class="hover:text-accent transition-colors"
        >
          <Linkedin class="w-6 h-6" />
        </a>
      </div>
      <p>
        &copy; {{ new Date().getFullYear() }} Chet Panha. All Rights Reserved.
      </p>
      <p class="text-sm mt-1">Crafted with ❤️ using Vue.js & Tailwind CSS</p>
    </div>
  </footer>
</template>
