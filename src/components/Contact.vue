<script setup>
import { Mail, MapPin, Send } from 'lucide-vue-next';

</script>

<template>
  <section class="section-container">
    <div class="text-center">
      <h2 class="section-title">Get In <span class="accent-text">Touch</span></h2>
      <p class="section-subtitle">Let's build something amazing together.</p>
    </div>

    <div class="grid lg:grid-cols-2 gap-12">
      <div class="animate-fade-in-up">
        <div class="space-y-6">
            <div class="flex items-center gap-4 bg-secondary p-4 rounded-lg">
            <Mail class="text-accent" size="24" />
            </div>
          <div class="flex items-center gap-4 bg-secondary p-4 rounded-lg">
            <MapPin class="text-accent" size="24" />
            </div>
          <button type="submit" class="w-full bg-accent text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-indigo-500 transition-colors flex items-center justify-center gap-2">
            <Send size="20" /> Send Message
          </button>
        </div>
      </div>

      <div class="animate-fade-in-up" style="animation-delay: 0.2s;">
        <form class="space-y-6">
            <input type="text" placeholder="Your Name" class="w-full bg-secondary px-4 py-3 rounded-md border border-primary focus:border-accent focus:ring-accent outline-none transition-all" required>
            <input type="email" placeholder="Your Email" class="w-full bg-secondary px-4 py-3 rounded-md border border-primary focus:border-accent focus:ring-accent outline-none transition-all" required>
            <textarea rows="5" placeholder="Your Message" class="w-full bg-secondary px-4 py-3 rounded-md border border-primary focus:border-accent focus:ring-accent outline-none transition-all resize-none" required></textarea>
            <button type="submit" class="w-full bg-accent text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-indigo-500 transition-colors flex items-center justify-center gap-2">
                <Send size="20" /> Send Message
            </button>
        </form>
      </div>
    </div>
  </section>
</template>