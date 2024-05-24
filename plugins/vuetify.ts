import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { aliases, fa } from 'vuetify/iconsets/fa'
import '@fortawesome/fontawesome-free/css/all.css'
import { en } from 'vuetify/locale'
import { defineNuxtPlugin } from '#app'

interface Theme {
  dark: boolean,
  colors: {
    /**
     * @see Cf. doc/colors.md pour le rôle de chaque couleur
     */
    // Global
    'background': string,
    'on-background': string,
    'surface': string,
    'on-surface': string,
    'primary': string,
    'on-primary': string,
    'primary-alt': string,
    'on-primary-alt': string,
    'secondary': string,
    'on-secondary': string,
    'neutral-strong': string,
    'on-neutral-strong': string,
    'neutral': string,
    'on-neutral': string,
    'on-neutral--clickable': string,
    'neutral-soft': string,
    'on-neutral-soft': string,
    'danger': string,
    'on-danger': string,
    'success': string,
    'on-success': string,
    'warning': string,
    'on-warning': string,
    'info': string,
    'on-info': string,
  }
}


export const lightTheme: Theme = {
  dark: false,
  colors: {
    'background': '#ffffff',
    'on-background': '#000000',

    'surface': '#ffffff',
    'on-surface': '#000000',

    'primary': '#787fb4',
    'on-primary': '#ffffff',

    'primary-alt': '#a9e0d6',
    'on-primary-alt': '#777777',

    'secondary': '#ced0e4',
    'on-secondary': '#f5f5f5',

    'neutral-strong': '#777777',
    'on-neutral-strong': '#ecf0f5',

    'neutral': '#e6e6e6',
    'on-neutral': '#404040',
    'on-neutral--clickable': '#5b61a4',

    'neutral-soft': '#ecf0f5',
    'on-neutral-soft': '#464646',

    // Content
    'danger': '#f56954',
    'on-danger': '#ffffff',

    'success': '#00a65a',
    'on-success': '#ffffff',

    'warning': '#f39c12',
    'on-warning': '#ffffff',

    'info': '#3c8dbc',
    'on-info': '#ffffff',
  }
}

export const darkTheme: Theme = {
  dark: true,
  colors: {
    'background': '#1a1a1a',
    'on-background': '#ffffff',

    'surface': '#262626',
    'on-surface': '#ffffff',

    'primary': '#00ad8e',
    'on-primary': '#ffffff',

    'primary-alt': '#a9e0d6',
    'on-primary-alt': '#777777',

    'secondary': '#324150',
    'on-secondary': '#f5f5f5',

    'neutral-strong': '#595959',
    'on-neutral-strong': '#ecf0f5',

    'neutral': '#324150',
    'on-neutral': '#cccccc',
    'on-neutral--clickable': '#9ca1c9',

    'neutral-soft': '#090c11',
    'on-neutral-soft': '#cccccc',

    // Content
    'danger': '#f56954',
    'on-danger': '#ffffff',

    'success': '#00a65a',
    'on-success': '#ffffff',

    'warning': '#f39c12',
    'on-warning': '#ffffff',

    'info': '#3c8dbc',
    'on-info': '#ffffff',
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    locale: {
      locale: 'en',
      messages: { en },
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light: lightTheme,
        dark: darkTheme
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
