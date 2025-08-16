<script setup>
import { ref, computed } from "vue";
import ProjectCard from "./ProjectCard.vue";

const projects = [
  {
    title: "Portfolio",
    description:
      "We are a passionate team dedicated to providing top-tier digital products and services that empower businesses and individuals to succeed in the online world.",
    image: "/products/portfolio.png",
    tags: ["Vue Js", "JavaScript", "Tailwind CSS"],
    categories: ["Vue Js", "Tailwind CSS"],
    liveUrl: "https://development-sambokdigital.sevalla.app/",
    codeUrl: "https://github.com/Ipanha/ecommerce",
  },
  {
    title: "Sambok Digital",
    description:
      "We are a passionate team dedicated to providing top-tier digital products and services that empower businesses and individuals to succeed in the online world.",
    image: "/products/sambok.png",
    tags: ["Laravel", "JavaScript", "Blade", "Tailwind CSS", "Api"],
    categories: ["Laravel", "Tailwind CSS"],
    liveUrl: "https://development-sambokdigital.sevalla.app/",
    codeUrl: "https://github.com/Ipanha/ecommerce",
  },
  {
    title: "FlixFlowKh",
    description:
      "A modern website for streaming movies and series, featuring a user-friendly interface and responsive design.",
    image: "/products/flixflowkh.png",
    tags: ["Vue JS", "JavaScript", "HTML", "Tailwind CSS"],
    categories: ["Vue JS", "Tailwind CSS"],
    liveUrl: "https://flixflowkh.vercel.app/",
    codeUrl: "https://github.com/Ipanha/FlixFlowKh",
  },
  {
    title: "FlixFlowKh Backend",
    description:
      "A backend service for the FlixFlowKh project, built with Laravel to handle data management and API requests.",
    image: "/products/flixflowkh.png",
    tags: ["Laravel", "PHP", "Blade", "Tailwind CSS"],
    categories: ["Laravel", "Tailwind CSS"],
    liveUrl: "https://flixflowkh.vercel.app/",
    codeUrl: "https://github.com/Ipanha/FlexFlowBackEnd",
  },
  {
    title: "E-Wedding Invitation",
    description:
      "A modern digital wedding invitation website with RSVP functionality, designed to simplify wedding planning and enhance guest experience.",
    image: "/products/ewedding.png",
    tags: ["Vue JS", "JavaScript", "HTML", "Tailwind CSS"],
    categories: ["Vue JS", "Tailwind CSS"],
    liveUrl: "https://panha-marany-wedding.vercel.app/",
    codeUrl: "https://github.com/Ipanha/e-wedding-invitaion",
  },
  {
    title: "TopUp MLBB",
    description:
      "A mobile top-up website for Mobile Legends: Bang Bang, featuring a user-friendly interface and secure payment options.",
    image: "/products/mlbb.png",
    tags: ["Vue JS", "JavaScript", "HTML", "Tailwind CSS"],
    categories: ["Vue JS", "Tailwind CSS"],
    liveUrl: "https://ndiamondstore.vercel.app/",
    codeUrl: "https://github.com/Ipanha/TopUP-MLBB",
  },
  {
    title: "Spotify Clone",
    description:
      "A web application that mimics the Spotify interface, allowing users to explore music and playlists.",
    image: "/products/spotify.png",
    tags: ["React JS", "JavaScript", "HTML", "Tailwind CSS"],
    categories: ["React JS", "Tailwind CSS"],
    liveUrl: "https://spotify-clone-lyart-beta.vercel.app/",
    codeUrl: "https://github.com/Ipanha/Spotify-Clone",
  },
  {
    title: "Class M2",
    description: "An interactive web application for M2 students.",
    image: "/products/m2.png",
    tags: ["JavaScript", "HTML", "CSS"],
    categories: ["Basic Web"],
    liveUrl: "https://class-m2.vercel.app/",
    codeUrl: "https://github.com/Ipanha/ClassM2",
  },
  {
    title: "Happy Bithday to me",
    description:
      "This project is a personal website that celebrates my birthday. It includes fireworks as the background and have ABA QR Code for scan sending me a birthday gift.",
    image: "/products/hbd.png",
    tags: ["JavaScript", "HTML", "CSS"],
    categories: ["Basic Web"],
    liveUrl: "https://happybirthdayofpanha.vercel.app/",
    codeUrl: "https://github.com/Ipanha/Phone-Shop-Management",
  },
  {
    title: "Phone Shop Management System",
    description:
      "A Java desktop app for phone shop management, featuring inventory tracking, sales recording, and customer management with a GUI and database storage.",
    image: "/products/phoneShop.png",
    tags: ["Java", "OOP", "Algorithms"],
    categories: ["Java"],
    liveUrl: "#",
    codeUrl: "https://github.com/Ipanha/Phone-Shop-Management",
  },
];

// Extract all unique categories from project tags
const categories = ["All", ...new Set(projects.flatMap((p) => p.categories))];

// Track selected category
const selectedCategory = ref("All");

// Filter projects based on selected category
const filteredProjects = computed(() => {
  if (selectedCategory.value === "All") return projects;
  return projects.filter((p) => p.categories.includes(selectedCategory.value));
});
</script>

<template>
  <section class="section-container bg-secondary">
    <div class="text-center mb-6">
      <h2 class="section-title">
        My <span class="accent-text">Projects</span>
      </h2>
      <p class="section-subtitle">A showcase of my recent work</p>
    </div>

    <!-- Menu Bar -->
    <div class="flex flex-wrap justify-center gap-3 mb-8">
      <button
        v-for="category in categories"
        :key="category"
        @click="selectedCategory = category"
        :class="[
          'px-4 py-2 rounded-full font-medium transition-colors',
          selectedCategory === category
            ? 'bg-accent text-white'
            : 'bg-gray-300 text-gray-800 hover:bg-gray-400',
        ]"
      >
        {{ category }}
      </button>
    </div>

    <!-- Project Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard
        v-for="(project, index) in filteredProjects"
        :key="project.title"
        :project="project"
        class="animate-fade-in-up"
        :style="{ animationDelay: `${index * 0.15}s` }"
      />
    </div>
  </section>
</template>
