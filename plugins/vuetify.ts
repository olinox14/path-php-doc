import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { aliases, fa } from 'vuetify/iconsets/fa'
import '@fortawesome/fontawesome-free/css/all.css'
import { fr } from 'vuetify/locale'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    locale: {
      locale: 'fr',
      messages: { fr },
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {},
      },
    },
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: {
        fa,
      },
    },
  })
  nuxtApp.vueApp.use(vuetify)
})
