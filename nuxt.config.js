module.exports = {

  head: {
    title: 'Ryths Blog',
    titleTemplate: '%s | ryths.cn',
    htmlAttrs: {
      xmlns: 'http://www.w3.org/1999/xhtml',
      lang: 'zh-CN'
    },
    meta: [
      {charset: 'utf-8'},
      {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'author', content: 'Rhys Xia,postmaster@ryths.cn'},
      {name: 'keywords', content: 'blog,Ryths,IT,JAVA,Vue,前端,后端,研究生'},
      {name: 'description', content: '个人技术博客，分享知识，寻找志同道合的朋友'},
      {name: 'copyright', content: 'Rhys Xia'}
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css'
      }
    ],
    noscript: [
      {innerHTML: 'This website requires JavaScript.'}
    ]
  },
  cache: {
    max: 100,
    maxAge: 1000 * 60 * 15
  },

  css: [
    '~/assets/scss/public.scss'
  ],

  loading: {color: '#4dce9b', failedColor: '#F56C6C'},
  plugins: [
    '~/plugins/http',
    '~/plugins/token',
    '~/plugins/filters',
    '~/plugins/components'
    // {src: '~/plugins/offline', ssr: false}
  ],
  build: {
    vendor: [
      '~/plugins/http',
      '~/plugins/token',
      '~/plugins/filters'
    ],
    extractCSS: true,
    extend (config, {isDev}) {
      // if (!isDev) {
      //   const OfflinePlugin = require('offline-plugin')
      //   config.plugins.push(new OfflinePlugin())
      // }
    }
  },
  router: {
    // scrollBehavior (to, from, savedPosition) {
    //   return {x: 0, y: 0}
    // },
    middleware: [
      'change-col-page'
    ]
  },
  modules: [
    '~/module/transition'
  ]
}
