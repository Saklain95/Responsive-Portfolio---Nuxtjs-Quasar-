// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['nuxt-quasar-ui', '@vercel/analytics'],

  quasar: {
    plugins: ['Notify', 'Dialog'],
    extras: {
      font: 'roboto-font',
      fontIcons: ['material-icons', 'mdi-v7'],
    },
    config: {
      brand: {
        primary: '#1a1a2e',
        secondary: '#16213e',
        accent: '#e94560',
        dark: '#1a1a2e',
        positive: '#21BA45',
        negative: '#C10015',
        info: '#31CCEC',
        warning: '#F2C037',
      },
    },
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Saqlain Ahamed Baig — Portfolio',
      meta: [
        { name: 'description', content: 'Full Stack Developer & UI/UX Designer Portfolio' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Serif+Display:ital@0;1&display=swap',
        },
      ],
    },
  },
})
