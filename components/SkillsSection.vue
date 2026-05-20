<template>
  <section class="section skills-section" id="skills">
    <div class="container">
      <div style="text-align: center; max-width: 560px; margin: 0 auto;">
        <div class="section-label">My Skills</div>
        <h2 class="section-title">Technologies I Work With</h2>
        <p style="color: var(--clr-ink-muted); margin-top: 12px;">
          A curated set of tools and technologies I use to build modern, scalable applications.
        </p>
      </div>

      <!-- Category Tabs -->
      <div style="display: flex; justify-content: center; gap: 10px; margin-top: 36px; flex-wrap: wrap;">
        <q-btn
          v-for="cat in categories"
          :key="cat"
          :label="cat"
          no-caps
          :class="activeCategory === cat ? 'btn-primary' : 'btn-outline'"
          @click="activeCategory = cat"
          size="sm"
        />
      </div>

      <div class="skills-grid">
        <div
          v-for="skill in filteredSkills"
          :key="skill.name"
          class="skill-card"
        >
          <div class="skill-icon" :style="{ background: skill.bg }">
            <span style="font-size: 22px;">{{ skill.emoji }}</span>
          </div>
          <div class="skill-name">{{ skill.name }}</div>
          <q-linear-progress
            :value="skill.level / 100"
            color="pink-7"
            track-color="grey-3"
            rounded
            style="height: 6px; margin-bottom: 6px;"
          />
          <div style="font-size: 12px; color: var(--clr-ink-muted); display: flex; justify-content: space-between;">
            <span>{{ skill.tag }}</span>
            <span style="font-weight: 600; color: var(--clr-ink);">{{ skill.level }}%</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const activeCategory = ref('All')

const categories = ['All', 'Frontend', 'Backend', 'Tools & Design']

const skills = [
  {
    name: 'HTML',
    emoji: '🧱',
    bg: '#fff3e0',
    level: 85,
    category: 'Frontend',
    tag: 'Advanced'
  },
  {
    name: 'CSS',
    emoji: '🎨',
    bg: '#e3f2fd',
    level: 80,
    category: 'Frontend',
    tag: 'Advanced'
  },
  {
    name: 'Vue.js / Nuxt.js',
    emoji: '💚',
    bg: '#e8f5e9',
    level: 95,
    category: 'Frontend',
    tag: 'Expert'
  },
  {
    name: 'Quasar Framework',
    emoji: '⚡',
    bg: '#e1f5fe',
    level: 90,
    category: 'Frontend',
    tag: 'Expert'
  },
  {
    name: 'JavaScript',
    emoji: '✨',
    bg: '#fffde7',
    level: 88,
    category: 'Frontend',
    tag: 'Advanced'
  },
  {
    name: 'React / Next.js',
    emoji: '⚛️',
    bg: '#e0f7fa',
    level: 80,
    category: 'Frontend',
    tag: 'Advanced'
  },
  {
    name: 'TailwindCSS',
    emoji: '💨',
    bg: '#e0f7fa',
    level: 92,
    category: 'Frontend',
    tag: 'Expert'
  },

  {
    name: 'Django / DRF',
    emoji: '🌿',
    bg: '#e8f5e9',
    level: 85,
    category: 'Backend',
    tag: 'Advanced'
  },
  {
    name: 'Core & Adv Java',
    emoji: '☕',
    bg: '#fff3e0',
    level: 95,
    category: 'Backend',
    tag: 'Advanced'
  },
  {
  name: 'Python',
  emoji: '🐍',
  bg: '#fff8e1',
  level: 82,
  category: 'Backend',
  tag: 'Advanced'
},
  {
    name: 'Hibernate',
    emoji: '🛠️',
    bg: '#ede7f6',
    level: 85,
    category: 'Backend',
    tag: 'Advanced'
  },
  {
    name: 'SpringBoot',
    emoji: '🌱',
    bg: '#f1f8e9',
    level: 85,
    category: 'Backend',
    tag: 'Advanced'
  },
  {
    name: 'Python / FastAPI',
    emoji: '🐍',
    bg: '#fff8e1',
    level: 78,
    category: 'Backend',
    tag: 'Advanced'
  },
  {
    name: 'PostgreSQL & MySQL',
    emoji: '🗄️',
    bg: '#e8eaf6',
    level: 82,
    category: 'Backend',
    tag: 'Advanced'
  },

  // {
  //   name: 'Docker / DevOps',
  //   emoji: '🐳',
  //   bg: '#e1f5fe',
  //   level: 74,
  //   category: 'Backend',
  //   tag: 'Intermediate'
  // },

  {
    name: 'Figma',
    emoji: '🎭',
    bg: '#fce4ec',
    level: 88,
    category: 'Tools & Design',
    tag: 'Intermediate'
  },
  {
    name: 'Git / GitHub',
    emoji: '🐙',
    bg: '#f3e5f5',
    level: 94,
    category: 'Tools & Design',
    tag: 'Intermediate'
  },
  {
    name: 'AWS / GCP',
    emoji: '☁️',
    bg: '#fff8e1',
    level: 70,
    category: 'Tools & Design',
    tag: 'Intermediate'
  },
]

const filteredSkills = computed(() =>
  activeCategory.value === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory.value)
)
</script>
