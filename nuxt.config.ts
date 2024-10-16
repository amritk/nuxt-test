// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@scalar/nuxt'],
  scalar: {
    spec: {
      url: 'https://cdn.jsdelivr.net/npm/@scalar/galaxy/dist/latest.yaml',
    },
  },
})