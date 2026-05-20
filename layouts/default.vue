<template>
  <q-layout view="hHh lpR fFf">
    <!-- Navigation -->
    <header class="portfolio-nav" :class="{ scrolled: isScrolled }">
      <div class="container">
        <div class="nav-inner">
          <a href="#home" class="nav-logo">Saqlain Ahamed Baig<span>.</span></a>

          <ul class="nav-links" :class="{ open: mobileOpen }">
            <li v-for="link in navLinks" :key="link.href">
              <a :href="link.href" @click="mobileOpen = false">{{ link.label }}</a>
            </li>
            <li>
              <a href="#contact" class="nav-cta q-btn" @click="mobileOpen = false">
                Hire Me
              </a>
            </li>
          </ul>

          <q-btn
            flat
            class="mobile-menu-btn"
            :icon="mobileOpen ? 'mdi-close' : 'mdi-menu'"
            @click="mobileOpen = !mobileOpen"
            style="display: none;"
          />
        </div>
      </div>
    </header>

    <!-- Page Content -->
    <q-page-container style="padding-top: 0;">
      <slot />
    </q-page-container>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>
          Designed &amp; Built with ❤️ by <strong style="color: #fff;">Saqlain Ahamed Baig</strong>
          &nbsp;·&nbsp;
          Powered by <a href="https://nuxt.com" target="_blank">Nuxt.js</a> + <a href="https://quasar.dev" target="_blank">Quasar</a>
        </p>
      </div>
    </footer>
  </q-layout>
</template>

<script setup>
const isScrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20
  })
})
</script>

<style scoped>
.mobile-menu-btn {
  color: var(--clr-ink);
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: flex !important;
  }
}
</style>
