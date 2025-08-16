<script setup>
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Send,
  Youtube,
} from "lucide-vue-next";
</script>

<template>
  <section
    class="min-h-screen flex items-start sm:items-center justify-center relative overflow-hidden pt-20 sm:pt-0"
  >
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[150%] bg-radial-gradient from-secondary via-primary to-primary"
    ></div>

    <div
      class="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-fade-in-up"
    >
      <img
        src="https://scontent.fpnh11-1.fna.fbcdn.net/v/t39.30808-6/522158588_1260024372279400_4989692203862965515_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHjguCZXRTR1zU6rNfn2eVPt74uhcTdLmy3vi6FxN0ubOw5URBBlQnd4ima67tdcgker_rwnlWzX6tVCUiGPNZ4&_nc_ohc=x9c89zBSPtMQ7kNvwHDU32q&_nc_oc=AdkcjFE-WEDGZSGqs4Sj1qiAApkGg4Oo-tsgsOpmQdnwi2EOPjxC64nNb2hCXwYg1Vw&_nc_zt=23&_nc_ht=scontent.fpnh11-1.fna&_nc_gid=ehNyyj_2F4IK1H-VPjgOEw&oh=00_AfXCfud1W74wkylnOkHipJ7jUEyN7pvYI3nWz18CeNpfOg&oe=68A471DE"
        alt="Chet Panha"
        class="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4 md:mb-6 border-4 border-secondary shadow-lg animate-subtle-glow"
      />

      <h1
        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 md:mb-3"
      >
        Hello, I'm <span class="accent-text">Chet Panha</span>
      </h1>

      <p
        class="text-lg sm:text-xl md:text-2xl text-text-secondary mb-6 md:mb-8 font-mono"
      >
        &lt; Software Engineering / &gt;
      </p>

      <p class="max-w-3xl mx-auto text-text-secondary mb-8 md:mb-10">
        Fourth-year Computer Science student at the Royal University of Phnom
        Penh (RUPP) with strong skills in web development, programming, and
        software engineering. Passionate about building modern, efficient, and
        scalable applications. Eager to learn new technologies and contribute to
        real-world projects.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#contact"
          class="bg-accent text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <Send class="w-5 h-5" /> Get In Touch
        </a>
        <a
          href="#projects"
          class="bg-secondary text-text-main px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
        >
          View My Work
        </a>
      </div>

      <div
        class="flex justify-center space-x-6 mt-10 md:mt-12 text-text-secondary"
      >
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
    </div>
  </section>
</template>

<style scoped>
.bg-radial-gradient {
  background-image: radial-gradient(circle, var(--tw-gradient-stops));
}

/* Optional: Add a smooth transition for font sizes */
h1,
p {
  transition: font-size 0.2s ease-in-out;
}
</style>
