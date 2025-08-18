<script setup>
import { School, Award, Briefcase } from "lucide-vue-next";

const journey = [
  {
    title: "Education",
    icon: School,
    items: [
      {
        period: "2023 - Present",
        name: "Computer Science",
        place: "Royal University of Phnom Penh (RUPP)",
      },
      {
        period: "2020 - 2022",
        name: "High School Diploma",
        place: "Chambak High School",
      },
      {
        period: "2017 - 2019",
        name: "Secondary School",
        place: "Boeung Rey Secondary School",
      },
    ],
  },
  {
    title: "Training Courses",
    icon: Award,
    items: [
      {
        period: "2024",
        name: "From Zero to Hero",
        place: "RUPP",
      },
      {
        period: "2023",
        name: "Personality Development & Society",
        place: "RUPP",
      },
      {
        period: "2023",
        name: "C Programming & Project Courses",
        place: "ETEC Center",
      },
      {
        period: "2022",
        name: "Youth ICT Certificate",
        place: "E-School Cambodia",
      },
    ],
  },
  {
    title: "Experience",
    icon: Briefcase,
    items: [
        {
        period: "2025-05-17 - Present",
        name: "Customer Upselling",
        place: "CheckinMe",
      },
        {
        period: "2024-05-13 - 2025-05-16",
        name: "System Trainer",
        place: "CheckinMe",
      },
      {
        period: "2023 - 2024",
        name: "Admin Content Creator",
        place: "Pixel Digital",
      },
      
      
    ],
  },
];
</script>

<template>
  <section id="journey" class="section-container">
    <div class="text-center mb-12 md:mb-16">
      <h2 class="section-title">My <span class="accent-text">Journey</span></h2>
      <p class="section-subtitle">A summary of my background and experience.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div
        v-for="category in journey"
        :key="category.title"
        class="animate-fade-in-up"
      >
        <div class="flex items-center mb-6">
          <component :is="category.icon" class="text-accent mr-3" :size="28" />
          <h3 class="text-2xl font-bold">{{ category.title }}</h3>
        </div>
        <div
        v-for="item in category.items"
        :key="item.name"
        class="relative pl-4 border-l-2 border-secondary space-y-8"
        >
        <!-- Circle -->
        <div class="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-4 border-primary"></div>

        <!-- Content with proper left margin -->
        <div class="ml-10">
            <p class="text-sm text-text-secondary">{{ item.period }}</p>
            <h4 class="font-semibold text-text-main">{{ item.name }}</h4>
            <p class="text-sm text-text-secondary">{{ item.place }}</p>
        </div>
        </div>

      </div>
    </div>
  </section>
</template>
