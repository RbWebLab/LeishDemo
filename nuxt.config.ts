export default defineNuxtConfig({
  ssr: true, // Enable SSR
  devtools: { enabled: true },
  components: true, // Enable auto-import for components
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module'
  ],
  tailwindcss: {
    exposeConfig: true
  },
  css: [
    '@/assets/css/tailwind.css',
  ],
  plugins: [
    '@/plugins/primevue.js',
  ],
  build: {
    transpile: ['primevue']
  },
  nitro: {
    preset: 'netlify' // Ensures proper configuration for SSR on Netlify
  }
})
