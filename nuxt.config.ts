// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  components: true, // Ensure auto-import for components is enabled
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module'
  ],
  tailwindcss: {
    exposeConfig: true, // This is important for Nuxt UI to use Tailwind config
  },
  css: [
    '@/assets/css/tailwind.css',
    'primevue/resources/themes/saga-blue/theme.css', // PrimeVue theme
    'primevue/resources/primevue.min.css', // PrimeVue core CSS
    'primeicons/primeicons.css', // PrimeIcons
  ],
  plugins: [
    '@/plugins/primevue.js', 
  ],
  build: {
    transpile: ['primevue']
  },
  vite: {
    build: {
      rollupOptions: {
        external: [
          'primevue/resources/primevue.min.css',
          'primevue/resources/themes/saga-blue/theme.css'
        ]
      }
    }
  },
  nitro: {
    preset: 'netlify'  // Add this to ensure Nuxt's Nitro uses Netlify as a preset
  }
})


