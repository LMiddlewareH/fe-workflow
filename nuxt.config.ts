const isDev = process.env.npm_lifecycle_event === 'dev'
const baseURL = isDev ? '' : '/fe-workflow'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'service-worker',
  },

  app: {
    baseURL,
    head: {
      link: [{ rel: 'shortcut icon', href: `${baseURL}/favicon.ico` }],
      script: [isDev && { src: 'https://cdn.tailwindcss.com' }],
    },
  },

  modules: ['@nuxt/content'],

  content: {
    highlight: {
      theme: 'github-dark-dimmed',
      preload: ['bash', 'git-commit', 'vue', 'nginx'],
    },
  },

  css: ['~/assets/css/base.css', '~/assets/css/tailwind.css', '~/assets/iconfont/iconfont.css'],

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
})
