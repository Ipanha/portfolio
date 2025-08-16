<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Journey from "./components/Journey.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import Achieve from "./components/Achieve.vue";
</script>

<template>
  <div class="bg-primary">
    <Navbar />
    <main>
      <Hero id="home" />
      <About id="about" />
      <Journey id="journey" />
      <Achieve id="achievement" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
    </main>
    <Footer />
  </div>
</template>

<style>
/* You can add any global, non-Tailwind styles here if needed */
.section-container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28;
}

.section-title {
  @apply text-3xl sm:text-4xl font-bold text-center mb-2 text-text-main;
}

.section-subtitle {
  @apply text-center text-text-secondary mb-12;
}

.accent-text {
  @apply text-accent;
}
</style>
