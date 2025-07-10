// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';
const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#3738FE',
      100: '#3738FE',
      200: '#3738FE',
      300: '#3738FE',
      400: '#3738FE',
      500: '#3738FE',
      600: '#3738FE',
      700: '#3738FE',
      800: '#3738FE',
      900: '#3738FE',
      950: '#3738FE'
    },
  },
})

export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        dir: 'rtl'
      },
      link: [
        { rel: 'icon', href: '/logo.svg' }
      ]
    },
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@primevue/nuxt-module'
  ],
  primevue: {
    options: {
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: 'none'
        }
      }
    }
  },
  devServer: {
    port: 4000
  },
})
