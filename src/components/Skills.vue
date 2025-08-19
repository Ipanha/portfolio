<script setup>
const skillCategories = [
  {
    title: "Languages",
    skills: [
      {
        name: "C/C++",
        level: "85%",
        color: "from-blue-500 to-cyan-400",
        image: "/icon/c++.png",
      },
      {
        name: "Java",
        level: "85%",
        color: "from-orange-500 to-red-500",
        image: "/icon/java.png",
      },
      {
        name: "PHP",
        level: "80%",
        color: "from-indigo-400 to-purple-500",
        image: "/icon/php.png",
      },
      {
        name: "JavaScript",
        level: "80%",
        color: "from-yellow-400 to-amber-500",
        image: "/icon/javascript.png",
      },
      {
        name: "jQaury",
        level: "80%",
        color: "from-blue-500 to-slate-200",
        image: "/icon/jquery.png",
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      {
        name: "React.js",
        level: "80%",
        color: "from-sky-400 to-cyan-300",
        image: "/icon/react.png",
      },
      {
        name: "Vue.js",
        level: "85%",
        color: "from-green-400 to-emerald-400",
        image: "/icon/vue.png",
      },
      {
        name: "Laravel",
        level: "88%",
        color: "from-red-500 to-orange-500",
        image: "/icon/laravel.png",
      },
      {
        name: "Tailwind CSS",
        level: "88%",
        color: "from-teal-400 to-sky-500",
        image: "/icon/tailwind.png",
      },
    ],
  },
  {
    title: "Design & Editing",
    skills: [
      {
        name: "Adobe Photoshop",
        level: "90%",
        color: "from-blue-600 to-sky-400",
        image: "/icon/photoshop.png",
      },
      {
        name: "Adobe XD",
        level: "85%",
        color: "from-pink-500 to-rose-400",
        image: "/icon/xd.png",
      },
      {
        name: "Adobe Premiere Pro",
        level: "85%",
        color: "from-indigo-500 to-purple-400",
        image: "/icon/premier.png",
      },
      {
        name: "CapCut",
        level: "98%",
        color: "from-gray-600 to-slate-400",
        image: "/icon/capcut.png",
      },
      {
        name: "Canva",
        level: "98%",
        color: "from-blue-600 to-blue-300",
        image: "/icon/canva.png",
      },
    ],
  },
  {
    title: "Tools & Professional Skills",
    skills: [
      {
        name: "Git & GitHub",
        level: "85%",
        color: "from-slate-700 to-gray-500",
        image: "/icon/git.svg",
      },
      {
        name: "OOP",
        level: "85%",
        color: "from-rose-500 to-pink-500",
        image: "/icon/oop.png",
      },
      {
        name: "Zoho Sprints",
        level: "90%",
        color: "from-green-500 to-slate-200",
        image: "/icon/zoho.png",
      },
      {
        name: "Click Up",
        level: "95%",
        color: "from-blue-500 to-pink-500",
        image: "/icon/clickup.png",
      },
      {
        name: "ChatGPT",
        level: "95%",
        color: "from-slate-300 to-green-500",
        image: "/icon/gpt.png",
      },
      {
        name: "Google Gemini",
        level: "95%",
        color: "from-pink-500 to-blue-500",
        image: "/icon/gemini.png",
      },
      {
        name: "Microsoft Office",
        level: "84%",
        color: "from-orange-600 to-red-500",
        image: "/icon/office.svg",
      },
      {
        name: "Problem Solving",
        level: "90%",
        color: "from-emerald-500 to-green-400",
        image: "/icon/problem-solving.png",
      },
    ],
  },
];
</script>

<template>
  <section class="section-container">
    <div class="text-center mb-16">
      <h2 class="section-title">My <span class="accent-text">Skills</span></h2>
      <p class="section-subtitle">Technologies and tools I work with</p>
    </div>

    <div class="space-y-12">
      <div
        v-for="category in skillCategories"
        :key="category.title"
        class="animate-fade-in-up"
      >
        <h3
          class="text-xl font-bold text-text-secondary mb-6 text-center md:text-left"
        >
          {{ category.title }}
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="skill in category.skills"
            :key="skill.name"
            class="bg-secondary p-6 rounded-lg text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/20"
          >
            <div class="w-16 h-16 mb-4 mx-auto">
              <img
                :src="skill.image"
                :alt="skill.name"
                class="w-full h-full object-contain"
              />
            </div>
            <h4 class="text-lg font-semibold mb-3">{{ skill.name }}</h4>
            <div class="w-full bg-primary rounded-full h-2.5 mb-2">
              <div
                class="bg-gradient-to-r h-2.5 rounded-full"
                :class="skill.color"
                :style="{ width: skill.level }"
              ></div>
            </div>
            <span class="text-sm text-text-secondary"
              >{{ skill.level }} Proficiency</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
