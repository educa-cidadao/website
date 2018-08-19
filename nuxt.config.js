module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'educa-cidadao-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Educa Cidadão' }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' }
    ]
  },
  css: [
    'bootstrap-vue',
    '@/assets/css/main.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    // proxyHeaders: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
