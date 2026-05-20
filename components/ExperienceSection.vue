<template>
  <section class="section experience-section" id="experience">
    <div class="container">
      <div style="text-align: center; max-width: 560px; margin: 0 auto 48px;">
        <div class="section-label">Career Path</div>
        <h2 class="section-title">Work Experience</h2>
      </div>

      <div class="exp-timeline">
        <div
          v-for="(exp, i) in experiences"
          :key="i"
          class="exp-item"
          :class="{ current: i === 0 }"
        >
          <div class="exp-dot">{{ exp.emoji }}</div>
          <div class="exp-content">
            <div class="exp-header">
              <div class="exp-role">{{ exp.role }}</div>
              <span class="exp-period">{{ exp.period }}</span>
            </div>
            <div class="exp-company">
              {{ exp.company }} · {{ exp.location }}
              <q-badge v-if="i === 0" color="pink-1" text-color="pink-9" label="Current" style="margin-left: 8px; font-size: 11px;" />
            </div>
            <p class="exp-desc">{{ exp.desc }}</p>
            <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 12px;">
              <span
                v-for="tech in exp.techs"
                :key="tech"
                style="font-size: 11px; font-weight: 600; padding: 3px 9px; background: var(--clr-surface-3); border-radius: 100px; color: var(--clr-ink-muted);"
              >{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    role: 'Software Engineer',
    company: 'Dashloc',
    location: 'Bengaluru',
    period: 'Sep 2025 – May 2026',
    emoji: '🚀',
    desc: 'Developed and maintained responsive dashboard interfaces using Vue.js, Nuxt.js, and Quasar. Integrated REST APIs using Django and optimized UI performance and cross-browser compatibility. Implemented authentication handling using cookies and session data. Collaborated with backend teams using Git & GitHub and resolved production issues to improve user experience.',
    techs: ['Vue.js', 'Nuxt.js', 'Quasar', 'Django', 'REST API', 'GitHub'],
  },
  {
    role: 'Java Developer Intern',
    company: 'Tap Academy',
    location: 'Bengaluru',
    period: 'Mar 2025 – Sep 2025',
    emoji: '☕',
    desc: 'Completed Java Developer internship with hands-on experience in Core & Advanced Java including OOP, Collections, Multithreading, Exception Handling, and Java 8 features. Built backend applications using JDBC, JSP, Servlets, J2EE, and MySQL. Worked with Spring, Spring Boot, and Hibernate to implement MVC architecture and ORM-based persistence.',
    techs: ['Java', 'Spring Boot', 'Hibernate', 'JDBC', 'JSP', 'MySQL'],
  },
  {
    role: 'Application Developer Intern',
    company: 'Rooman Technologies',
    location: 'Virtual',
    period: 'Sep 2024 – Mar 2025',
    emoji: '💻',
    desc: 'Contributed to a team-based e-commerce web application using MERN stack technologies. Developed responsive UI components and integrated backend services in an Agile development environment.',
    techs: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript', 'Agile'],
  },
]
</script>
