// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    '~/assets/css/global.css',
  ],

  app: {
    head: {
      title: 'PACCA Adventures Group',

      htmlAttrs: {
        lang: 'en'
      },

      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'description',
          content: 'PACCA Adventures Group provides Breakfast, After School and Holiday Clubs for children.'
        },
        {
          name: 'theme-color',
          content: '#132b45'
        },
      ],

      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/logo.png'
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png'
        }
      ]
    }
  }

})

  