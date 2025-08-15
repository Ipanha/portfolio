<script setup>
import ProjectCard from './ProjectCard.vue';

const projects = [
  {
    title: 'Advanced Calculator',
    description: 'A comprehensive calculator application built in C++ with advanced mathematical functions and memory operations.',
    image: 'https://source.unsplash.com/random/400x300?calculator',
    tags: ['C++', 'OOP', 'Algorithms'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Professional Portfolio',
    description: 'This very portfolio website, built with Vue.js and Tailwind CSS to showcase my skills and projects.',
    image: 'https://source.unsplash.com/random/400x300?portfolio,website',
    tags: ['Vue.js', 'TailwindCSS', 'HTML5'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Student Management System',
    description: 'A system for managing student records with CRUD operations and file handling, implemented in C++.',
    image: 'https://source.unsplash.com/random/400x300?database,system',
    tags: ['C++', 'File I/O', 'Data Management'],
    liveUrl: '#',
    codeUrl: '#',
  },
];
</script>

<template>
  <section class="section-container bg-secondary">
    <div class="text-center">
      <h2 class="section-title">My <span class="accent-text">Projects</span></h2>
      <p class="section-subtitle">A showcase of my recent work</p>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard v-for="(project, index) in projects" :key="project.title" :project="project"
                   class="animate-fade-in-up" :style="{ animationDelay: `${index * 0.15}s` }" />
    </div>
  </section>
</template>