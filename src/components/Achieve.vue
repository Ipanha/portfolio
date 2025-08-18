<script setup>
defineProps({
  id: String,
});
import { ref } from "vue";

const selectedImage = ref(null);

const openImageModal = (imageUrl) => {
  selectedImage.value = imageUrl;
};
const closeImageModal = () => {
  selectedImage.value = null;
};
const acheivement = [
  {
    title: "Certifications",
    achieves: [
      {
        name: "Best Performance of 1st Quarter 2024",
        company: "CheckinMe",
        image: "/certificate/bestPerformanceOfTraining.jpg",
      },
      {
        name: "Best Attendance of August 2024",
        company: "CheckinMe",
        image: "/certificate/Mr-Chet-Panha-Aug.png",
      },
      {
        name: "Best Attendance of July 2024",
        company: "CheckinMe",
        image: "/certificate/Mr-Chet-Panha-July.png",
      },
      {
        name: "Best Performance of 2023",
        company: "Pixel Digital",
        image: "/certificate/pixeldigital.jpg",
      },
      {
        name: "Basic /Advanced C Programming & Project Courses",
        company: "ETEC Center",
        image: "/certificate/Mr-Chet-Panha.png",
      },
    ],
  },
];
</script>
<template>
  <section :id="id" class="section-container">
    <div class="text-center mb-12 md:mb-16">
      <h2 class="section-title">
        My <span class="accent-text">Achievement</span>
      </h2>
      <p class="section-subtitle">A collection of my certifications</p>
    </div>

    <div class="space-y-12">
      <div
        v-for="category in acheivement"
        :key="category.title"
        class="animate-fade-in-up"
      >
        <h3
          class="text-xl sm:text-2xl font-bold text-text-secondary mb-6 text-center md:text-left"
        >
          {{ category.title }}
        </h3>
        <!-- Grid now stacks on mobile, 2 cols on tablet, 3 on desktop -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="achieve in category.achieves"
            :key="achieve.name"
            class="bg-secondary rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/20"
          >
            <div
              @click="openImageModal(achieve.image)"
              class="w-full aspect-video bg-gray-800 cursor-pointer"
            >
              <img
                :src="achieve.image"
                :alt="achieve.name"
                class="w-full h-full object-contain"
              />
            </div>
            <!-- Added min-height to keep card sizes consistent -->
            <div class="p-6 text-center flex flex-col min-h-[150px]">
              <!-- Responsive font size for the achievement name -->
              <h4 class="text-base sm:text-lg font-semibold mb-3 flex-grow">{{ achieve.name }}</h4>
              <hr class="border-gray-700/50" />
              <span class="text-sm text-text-secondary mt-3 block">{{
                achieve.company
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Image Modal -->
  <Transition name="fade">
    <div
      v-if="selectedImage"
      @click="closeImageModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    >
      <!-- Added @click.stop to prevent modal from closing when clicking the image -->
      <div class="relative max-w-4xl max-h-[90vh]" @click.stop>
        <img
          :src="selectedImage"
          alt="Full screen certificate view"
          class="object-contain w-full h-full rounded-lg"
        />
        <!-- Made the close button more responsive and accessible -->
        <button
          @click="closeImageModal"
          class="absolute -top-3 -right-3 sm:top-0 sm:-right-12 bg-white/80 backdrop-blur-sm text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg hover:bg-white transition-colors"
          aria-label="Close image"
        >
          &times;
        </button>
      </div>
    </div>
  </Transition>
</template>

<style>
/* Simple fade transition for the modal */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
