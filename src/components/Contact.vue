<script setup>
import { Mail, MapPin, Send, Phone } from "lucide-vue-next";
</script>

<template>
  <section class="section-container">
    <div class="text-center">
      <h2 class="section-title">
        Get In <span class="accent-text">Touch</span>
      </h2>
      <p class="section-subtitle">Let's build something amazing together.</p>
    </div>

    <div class="grid lg:grid-cols-2 gap-12">
      <div class="animate-fade-in-up">
        <div class="space-y-6">
          <div class="flex items-center gap-4 bg-secondary p-4 rounded-lg">
            <Phone class="text-accent" size="24" />
            <a
              href="tel:+855976029519"
              className="text-base font-medium hover:underline"
              >+855 97 60 29 519</a
            >
          </div>
          <div class="flex items-center gap-4 bg-secondary p-4 rounded-lg">
            <Send class="text-accent" size="24" />
            <a
              href="https://t.me/Chet_Panha" target="_blank"
              className="text-base font-medium hover:underline"
              >Chet Panha</a
            >
          </div>
          <div class="flex items-center gap-4 bg-secondary p-4 rounded-lg">
            <Mail class="text-accent" size="24" />
            <a
              href="mailto:chetpanha888@gmail.com"
              className="text-base font-medium hover:underline"
              >chetpanha888@gmail.com</a
            >
          </div>
          <div class="flex items-center gap-4 bg-secondary p-4 rounded-lg">
            <MapPin class="text-accent" size="24" />
            <h2>Phnom Penh, Cambodia</h2>
          </div>
        </div>
      </div>

      <div class="animate-fade-in-up" style="animation-delay: 0.2s">
        <form class="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            class="w-full bg-secondary px-4 py-3 rounded-md border border-primary focus:border-accent focus:ring-accent outline-none transition-all"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            class="w-full bg-secondary px-4 py-3 rounded-md border border-primary focus:border-accent focus:ring-accent outline-none transition-all"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            class="w-full bg-secondary px-4 py-3 rounded-md border border-primary focus:border-accent focus:ring-accent outline-none transition-all resize-none"
            required
          ></textarea>
          <button
            type="submit"
            class="w-full bg-accent text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-indigo-500 transition-colors flex items-center justify-center gap-2"
          >
            <Send size="20" /> Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
