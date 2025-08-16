<script setup>
import { ref } from 'vue';
import { Menu, X } from 'lucide-vue-next';

const isMenuOpen = ref(false);

const navLinks = [
  { href: '#home', text: 'Home' },
  { href: '#about', text: 'About' },
  { href: '#journey', text: 'Journey' },
  { href: '#skills', text: 'Skills' },
  { href: '#projects', text: 'Projects' },
  { href: '#contact', text: 'Contact' },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 transition-all duration-300">
    <nav class="bg-primary/80 backdrop-blur-lg border-b border-secondary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex-shrink-0">
            <a href="#home" class="text-2xl font-bold text-accent">Chet Panha</a>
          </div>

          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a v-for="link in navLinks" :key="link.text" :href="link.href"
                 class="text-text-secondary hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {{ link.text }}
              </a>
            </div>
          </div>

           <div class="md:hidden">
            <button @click="toggleMenu" class="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-accent focus:outline-none">
              <Menu v-if="!isMenuOpen" :size="24" />
              <X v-else :size="24" />
            </button>
          </div>
        </div>
      </div>

      <div v-if="isMenuOpen" class="md:hidden bg-secondary">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a v-for="link in navLinks" :key="link.text" :href="link.href" @click="closeMenu"
             class="text-text-secondary hover:text-accent block px-3 py-2 rounded-md text-base font-medium transition-colors">
            {{ link.text }}
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>