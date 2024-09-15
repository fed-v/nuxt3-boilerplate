// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },

  modules: ['@pinia/nuxt', '@nuxtjs/i18n', '@nuxt/eslint'],

  imports: {
    // Auto-import pinia stores defined in `~/stores`
    dirs: ['stores'],
  },

  pinia: {
    autoImports: ['defineStore', 'storeToRefs'],
  },

  i18n: {
    /* module options */
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en-US',
        iso: 'en-US',
        name: 'English(US)',
        file: 'en-US.json',
      },
      {
        code: 'fr-FR',
        iso: 'fr-FR',
        name: 'French(FR)',
        file: 'fr-FR.json',
      },
    ],
    defaultLocale: 'en-US',
  },

  css: [
    '@/assets/styles/reset.css',
    '@/assets/styles/variables.css',
    '@/assets/styles/global.css',
  ],

  app: {
    // Define the global head meta tags
    head: {
      // Set global metadata for SEO
      title: 'Site Title',

      meta: [
        {
          name: 'description',
          content: 'Site Description',
        },
      ],

      // Load external Javascript file
      script: [
        {
          src: 'https://unpkg.com/ionicons@latest/dist/ionicons/ionicons.js',
        },
      ],

      // Load external stylesheets
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap',
        },
      ],
    },
  },

  // Any configuration settings that only run in Dev mode go here:
  $development: {
    app: {
      head: {
        title: 'Dev | Title',
      },
    },
  },

  // Any configuration settings that only run in Production go here:
  $production: {
    app: {
      head: {
        title: 'Prod | Title',
      },
    },
  },

  // Any configuration settings that only run when testing go here:
  $test: {
    app: {
      head: {
        title: 'Test | Title',
      },
    },
  },

  // Runtime variables
  runtimeConfig: {
    // Private variables

    public: {
      // Public variables
    },
  },

  compatibilityDate: '2024-08-28',
});
