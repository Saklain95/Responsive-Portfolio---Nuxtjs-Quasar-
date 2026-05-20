<template>
  <section class="section" id="projects">
    <div class="container">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px; margin-bottom: 48px;">
        <div>
          <div class="section-label">My Work</div>
          <h2 class="section-title">Featured Projects</h2>
        </div>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <q-btn
            v-for="filter in filters"
            :key="filter"
            :label="filter"
            no-caps
            size="sm"
            :class="activeFilter === filter ? 'btn-primary' : 'btn-outline'"
            @click="activeFilter = filter"
          />
        </div>
      </div>

      <div class="projects-grid">
        <div
          v-for="project in filteredProjects"
          :key="project.title"
          class="project-card"
          @click="selectedProject = project"
        >
          <div class="project-thumb" :style="{ background: project.bg }">
            <span>{{ project.emoji }}</span>
            <div class="overlay">
              <q-btn round flat icon="mdi-github" style="color: #fff; background: rgba(255,255,255,0.2);" />
              <q-btn round flat icon="mdi-open-in-new" style="color: #fff; background: rgba(255,255,255,0.2);" />
            </div>
          </div>
          <div class="project-body">
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
            </div>
            <div class="project-name">{{ project.title }}</div>
            <p class="project-desc">{{ project.desc }}</p>
          </div>
        </div>
      </div>

      <div style="text-align: center; margin-top: 48px;">
        <q-btn
          class="btn-outline"
          label="View All Projects on GitHub"
          no-caps
          icon="mdi-github"
          target="_blank"
          href="https://github.com/Saklain95"
        />
      </div>
    </div>

    <!-- Project Detail Dialog -->
    <q-dialog v-model="showDialog" maximized>
      <q-card v-if="selectedProject" style="max-width: 700px; width: 100%; margin: auto; border-radius: 20px; overflow: hidden;">
        <div :style="{ background: selectedProject.bg, padding: '60px', textAlign: 'center', fontSize: '5rem' }">
          {{ selectedProject.emoji }}
        </div>
        <q-card-section style="padding: 32px;">
          <div class="project-tags" style="margin-bottom: 12px;">
            <span v-for="tag in selectedProject.tags" :key="tag" class="project-tag">{{ tag }}</span>
          </div>
          <h3 style="font-size: 24px; font-weight: 700; margin-bottom: 12px;">{{ selectedProject.title }}</h3>
          <p style="color: var(--clr-ink-muted); line-height: 1.7; margin-bottom: 24px;">{{ selectedProject.longDesc }}</p>
          <div style="display: flex; gap: 12px;">
            <q-btn class="btn-primary" label="Live Demo" no-caps icon="mdi-open-in-new" />
            <q-btn class="btn-outline" label="View Code" no-caps icon="mdi-github" />
            <q-btn flat icon="mdi-close" @click="selectedProject = null" style="margin-left: auto;" />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </section>
</template>

<script setup>
const activeFilter = ref('All')
const selectedProject = ref(null)

const showDialog = computed({
  get: () => selectedProject.value !== null,
  set: (v) => { if (!v) selectedProject.value = null },
})

const filters = ['All', 'Web App', 'Mobile', 'Design', 'Open Source']

const projects = [
  {
  title: 'Online Food Delivery Web Application',
  emoji: '🍔',
  bg: 'linear-gradient(135deg, #ffe0b2, #ffcc80)',
  desc: 'Java Full Stack based food ordering platform with authentication, cart, and checkout features.',
  longDesc: 'Developed a complete Online Food Delivery Web Application using JSP, JDBC, SQL, HTML, CSS, and JavaScript. The platform includes secure user authentication, restaurant listings, cart management, checkout flow, profile-based auto-fill functionality, and order confirmation workflow. Implemented database integration using JDBC and SQL for efficient data handling and user management.',
  tags: ['Java', 'JSP', 'JDBC', 'SQL', 'JavaScript', 'HTML', 'CSS', 'Cookies & Session'],
  category: 'Web App',
},
{
  title: 'Pokémon Gallery – React API Project',
  emoji: '⚡',
  bg: 'linear-gradient(135deg, #fff3b0, #ffd54f)',
  desc: 'Responsive React application with Pokémon search and detailed views using public APIs.',
  longDesc: 'Built a responsive single-page Pokémon Gallery application using React.js, REST APIs, and React Router. Implemented real-time search functionality, detailed Pokémon views, seamless navigation with React Router, and optimized responsive UI for both mobile and desktop users.',
  tags: ['React.js', 'REST API', 'React Router', 'JavaScript'],
  category: 'Web App',
},
{
  title: 'Employee Management System',
  emoji: '👨‍💼',
  bg: 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
  desc: 'Django-based employee management dashboard with department-wise employee operations.',
  longDesc: 'Developed an Employee Management System using Django, Django REST Framework (DRF), and REST APIs. Built an interactive dashboard to manage employees with features such as viewing, adding, modifying, and deleting employee records based on departments. Implemented backend APIs for efficient data handling, department-wise filtering, and seamless CRUD operations with responsive UI integration.',
  tags: ['Django', 'Python', 'DRF', 'REST API', 'HTML', 'CSS', 'JavaScript'],
  category: 'Web App',
},
{
  title: 'Responsive Portfolio Website',
  emoji: '💼',
  bg: 'linear-gradient(135deg, #d1c4e9, #b39ddb)',
  desc: 'Modern responsive portfolio website built with Vue.js, Nuxt.js, and Quasar Framework.',
  longDesc: 'Designed and developed a fully responsive personal portfolio website using Vue.js, Nuxt.js, and Quasar Framework with a modern UI/UX approach. Implemented smooth scrolling navigation, responsive layouts, animated sections, project showcase cards, skills section, and contact form integration. Focused on clean component-based architecture, mobile-first responsiveness, performance optimization, and interactive user experience. Added dark-themed modern styling, reusable components, and deployment-ready production configuration.',
  tags: ['Vue.js', 'Nuxt.js', 'Quasar Framework', 'JavaScript', 'HTML', 'CSS', 'Responsive Design', 'Frontend Development'],
  category: 'Portfolio Website',
},
  {
    title: 'TaskMate App',
    emoji: '✅',
    bg: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)',
    desc: 'Cross-platform productivity app with offline sync, reminders, and team collaboration.',
    longDesc: 'TaskMate is a productivity app built with Nuxt 3 (PWA) and Capacitor for native mobile. Features include offline-first architecture with IndexedDB sync, push notifications, team workspaces, and AI-powered task suggestions.',
    tags: ['Nuxt.js', 'PWA', 'Capacitor'],
    category: 'Mobile',
  },
  {
    title: 'DesignKit UI',
    emoji: '🎨',
    bg: 'linear-gradient(135deg, #f3e5f5, #e1bee7)',
    desc: 'Open-source design system with 80+ components built on Vue 3 and Quasar.',
    longDesc: 'DesignKit is an open-source component library offering 80+ accessible, themeable Vue 3 components. Built on top of Quasar, it adds additional design tokens, animations, and compound components for rapid UI development.',
    tags: ['Vue.js', 'Design System', 'OSS'],
    category: 'Open Source',
  },
  {
    title: 'Brandify',
    emoji: '✨',
    bg: 'linear-gradient(135deg, #fff8e1, #ffecb3)',
    desc: 'Complete brand identity design — logo, guidelines, and Figma component library.',
    longDesc: 'Brandify is a comprehensive brand identity project for a fintech startup. Deliverables included logo design, full brand guidelines, Figma component library with 120+ components, motion guidelines, and developer handoff documentation.',
    tags: ['Figma', 'Branding', 'UI Design'],
    category: 'Design',
  },
]

const filteredProjects = computed(() =>
  activeFilter.value === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter.value)
)
</script>
