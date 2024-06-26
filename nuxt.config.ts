import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: true,
  target: 'static',
  title: 'Path-PHP Documentation',
  devtools: {
    // @see https://github.com/nuxt/devtools
    enabled: true,
  },
  app: {
    head: {
      title: 'Path-PHP Documentation',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      htmlAttrs: {
        lang: 'en-US'
      }
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  hooks: {
    'builder:watch': console.log,
  },
  css: [
    'vuetify/lib/styles/main.sass'
  ],
  modules: [
    async (_, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) =>
          // @ts-expect-error A revoir après que les lignes aient été décommentées
          (config.plugins ?? []).push(
              vuetify()
              // Remplacer par cela quand l'issue https://github.com/vuetifyjs/vuetify-loader/issues/273 sera règlée..
              // voir aussi : https://github.com/nuxt/nuxt/issues/15412 et https://github.com/vuetifyjs/vuetify-loader/issues/290
              // voir aussi : https://github.com/jrutila/nuxt3-vuetify3-bug
              // vuetify({
              //     styles: { configFile: './assets/css/settings.scss' }
              // })
          )
      )
    },
    'nuxt-lodash',
    '@nuxt/devtools',
    '@nuxtjs/sitemap',
  ],
  webfontloader: {
    google: {
      families: ['Barlow:300,400,500,700&display=swap'],
    },
  },
  vite: {
    esbuild: {
      drop: process.env.DEBUG ? [] : ['console', 'debugger'],
      tsconfigRaw: {
        compilerOptions: {
          experimentalDecorators: true,
        },
      },
    },
    ssr: {
      noExternal: ['vuetify'],
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  site: {
    url: 'https://path-php.net'
  },
})
