<template>
  <div>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <ContactSection />
  </div>
</template>

<script setup>
useHead({
  title: 'Saqlain Baig — Full Stack Developer & UI/UX Designer',
  meta: [
    {
      name: 'description',
      content: 'Portfolio of Saqlain Ahamed Baig — Full Stack Developer UI/UX Designer specializing in Vue.js, Nuxt.js, Quasar, Python, DRF, Django, Hibernate, Core & Adv Java, JDBC, DSA.',
    },
    { property: 'og:title', content: 'Saqlain Ahamed Baig — Portfolio' },
    { property: 'og:description', content: 'Full Stack Developer & UI/UX Designer' },
    { property: 'og:type', content: 'website' },
  ],
})
</script>
