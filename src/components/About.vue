<script setup>
import { computed } from "vue";
import { Award, Briefcase, Code } from "lucide-vue-next";

const developerInfo = {
  name: "Chet Panha",
  age: 20,
  major: "Computer Science",
  passions: ["Coding", "Innovation", "UI/UX"],
  skills: ["Software Eng.", "Web Dev", "Problem Solving"],
  motto: "Building the future, one line of code at a time.",
  bio: "I'm a dedicated Computer Science student based in Phnom Penh with a strong passion for developing innovative software solutions. I thrive on solving complex problems and am constantly exploring new technologies to enhance my skills and create impactful applications.",
  stats: [
    { icon: Briefcase, value: "2+", label: "Years Experience" },
    { icon: Award, value: "10+", label: "Projects Completed" },
    { icon: Code, value: "15+", label: "Technologies Known" },
  ],
};

const passionsString = computed(() =>
  developerInfo.passions.map((p) => `'${p}'`).join(", ")
);
const skillsString = computed(() =>
  developerInfo.skills.map((s) => `'${s}'`).join(", ")
);
</script>

<template>
  <section class="relative overflow-hidden  py-24 text-text-primary">
    <!-- Background Glows -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
    </div>

    <!-- Title -->
    <div class="text-center mb-16 max-w-3xl mx-auto">
      <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
        About <span class="text-accent drop-shadow-lg">Me</span>
      </h2>
      <p class="mt-3 text-lg md:text-xl text-text-secondary font-medium italic">
        {{ developerInfo.motto }}
      </p>
    </div>

    <!-- Main Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-6">
      
      <!-- Image Section -->
      <div class="relative order-2 lg:order-1 group">
        <!-- Glowing Border Layer -->
        <div class="absolute -inset-3 rounded-3xl bg-gradient-to-r from-accent via-purple-500 to-accent opacity-40 blur-xl transition duration-700 group-hover:opacity-80 animate-pulse"></div>

        <!-- Image Card -->
        <div class="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-800/50 backdrop-blur-xl shadow-2xl transform transition duration-700 group-hover:scale-[1.02] group-hover:shadow-accent/50">
          <img
            src="/images/DSC0031.jpg"
            alt="Chet Panha"
            class="w-full h-[22rem] object-cover rounded-3xl transition duration-700 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/20 to-transparent"></div>
        </div>

        <!-- Accent Glow Overlay -->
        <div class="absolute inset-0 rounded-3xl bg-gradient-to-tr from-accent/10 to-transparent opacity-0 group-hover:opacity-50 transition duration-700"></div>
      </div>

      <!-- Text + Stats -->
      <div class="space-y-10 order-1 lg:order-2 animate-fade-in-up">
        <p class="text-lg md:text-xl text-text-secondary leading-relaxed border-l-4 border-accent pl-5">
          Hello, I'm <strong class="text-text-primary font-semibold">{{ developerInfo.name }}</strong>. {{ developerInfo.bio }}
        </p>

        <!-- Stats -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-6">
          <div
            v-for="stat in developerInfo.stats"
            :key="stat.label"
            class="bg-slate-800/60 backdrop-blur-md border border-slate-700 hover:border-accent transition duration-300 transform hover:scale-105 text-center p-6 rounded-2xl shadow-xl"
          >
            <component
              :is="stat.icon"
              class="mx-auto text-accent mb-3 drop-shadow-md"
              :size="36"
            />
            <div class="text-3xl font-extrabold text-accent">{{ stat.value }}</div>
            <div class="text-sm text-text-primary font-light mt-1">{{ stat.label }}</div>
          </div>
        </div>

        <!-- Code Block -->
        <div class="bg-slate-900/60 border border-slate-700 rounded-2xl p-6 font-mono shadow-inner backdrop-blur-lg">
          <div class="flex space-x-2 mb-4">
            <span class="w-3 h-3 bg-red-500 rounded-full"></span>
            <span class="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span class="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <pre class="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap text-slate-300">
<span class="text-slate-500">// developer-profile.js</span>
<span class="text-pink-400">class</span> <span class="text-emerald-300">DeveloperProfile</span> {
  <span class="text-amber-300">constructor</span>() {
    <span class="text-sky-400">this</span>.name      = <span class="text-orange-300">'{{ developerInfo.name }}'</span>;
    <span class="text-sky-400">this</span>.major     = <span class="text-orange-300">'{{ developerInfo.major }}'</span>;
    <span class="text-sky-400">this</span>.location  = <span class="text-orange-300">'Phnom Penh, Cambodia'</span>;
  }

  <span class="text-amber-300">getCoreSkills</span>() {
    <span class="text-pink-400">return</span> [<span class="text-orange-300">{{ skillsString }}</span>];
  }

  <span class="text-amber-300">getMotto</span>() {
    <span class="text-pink-400">console</span>.<span class="text-cyan-300">log</span>(<span class="text-orange-300">'{{ developerInfo.motto }}'</span>);
  }
}
          </pre>
        </div>
      </div>
    </div>
  </section>
</template>
