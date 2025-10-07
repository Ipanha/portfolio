<script setup>
import { computed } from "vue";
import { Award, Briefcase, Code } from "lucide-vue-next";

// Your script content remains the same
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
  <section class="section-container bg-secondary">
    <div class="text-center mb-12 md:mb-16">
      <h2 class="section-title">About <span class="accent-text">Me</span></h2>
      <p class="section-subtitle">Developer & Problem Solver</p>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-12 md:gap-16 items-start"
    >
      <div class="animate-fade-in-up space-y-8">
        <p class="text-base md:text-lg text-text-secondary leading-relaxed">
          {{ developerInfo.bio }}
        </p>

        <div class="grid grid-cols-3 gap-2 sm:gap-4">
          <div
            v-for="stat in developerInfo.stats"
            :key="stat.label"
            class="bg-primary text-center p-3 sm:p-4 rounded-lg"
          >
            <component
              :is="stat.icon"
              class="mx-auto text-accent mb-2"
              :size="28"
            />
            <div class="text-lg sm:text-xl font-bold">{{ stat.value }}</div>
            <div class="text-xs sm:text-sm text-text-secondary">
              {{ stat.label }}
            </div>
          </div>
        </div>

        <div
          class="bg-primary rounded-lg p-0 sm:p-6 font-mono shadow-lg"
        >
          <pre><code class="language-javascript text-xs sm:text-sm whitespace-pre-wrap">
        <span class="text-gray-500">// {{ developerInfo.name.toLowerCase().replace(' ', '-') }}.js</span>
        <span class="text-purple-400">class</span> <span class="text-green-300">Developer</span> {
          <span class="text-yellow-300">constructor</span>() {
            <span class="text-blue-400">this</span>.name      = <span class="text-orange-300">'{{ developerInfo.name }}'</span>;
            <span class="text-blue-400">this</span>.age        = <span class="text-cyan-300">{{ developerInfo.age }}</span>;
            <span class="text-blue-400">this</span>.passion   = [<span class="text-orange-300">{{ passionsString }}</span>];
            <span class="text-blue-400">this</span>.skills    = [<span class="text-orange-300">{{ skillsString }}</span>];
          }

          <span class="text-yellow-300">getMotto</span>() {
            <span class="text-purple-400">return</span> <span class="text-orange-300">'{{ developerInfo.motto }}'</span>;
          }
        }
          </code></pre>
        </div>
      </div>

      <div class="group relative animate-fade-in-up md:sticky md:top-24">
        <div
          class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500"
        ></div>
        <img
          src="/images/withCEO.jpg"
          alt="Chet Panha"
          class="relative rounded-xl shadow-2xl w-full h-auto object-cover"
        />
      </div>
    </div>
    
  </section>
</template>