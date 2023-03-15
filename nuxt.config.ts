export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.postcss'
  },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
