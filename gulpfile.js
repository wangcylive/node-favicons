const path = require('path')
const gulp = require('gulp')
const favicons = require('favicons').stream

const url = path.resolve(__dirname, './favicons/logo.png')

gulp.task('default', function () {
  return gulp.src(url).pipe(favicons({
    path: 'https://ma.fachunjun.com/site/assets/img/favicon/', // 设置 publicPath
    appName: 'My App',
    appShortName: 'App',
    appDescription: 'This is my application',
    background: '#020307',
    theme_color: '#ffffff',
    display: 'standalone',
    orientation: 'portrait',
    scope: '/',
    start_url: '/',
    lang: 'zh-CN',
    version: 1.0,
    logging: false,
    html: 'index.html',
    pipeHTML: true,
    replace: true,
    icons: {
      android: true,
      appleIcon: true,
      favicons: true,
      appleStartup: false,
      coast: false,
      firefox: false,
      windows: false,
      yandex: false
    },
    developerName: 'Hayden Bleasel',
    developerURL: 'http://haydenbleasel.com/',
    url: 'http://haydenbleasel.com/'
  }))
    .on('error', (err) => {
      console.log(err)
    })
    .pipe(gulp.dest(`./dist/${Date.now()}`))
})
