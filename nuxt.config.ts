// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: [
    '@nuxt/content'
  ],
  server: {
    host: '0.0.0.0',
  },
  build: {
    hotMiddleware: {
      client: {
        host: '0.0.0.0',
      },
    },
  },
  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000
    },
  },
})
