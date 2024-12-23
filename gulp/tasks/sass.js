import _sass from 'sass'
import __sass from 'gulp-sass'

const $sass = __sass(_sass)

import minimizer from 'gulp-clean-css' // Сжатие CSS файла
import autoprefixer from 'gulp-autoprefixer' // Добавление вендорных префиксов
import queries from 'gulp-group-css-media-queries' // Групировка медиа запросов
import rename from 'gulp-rename'

export const sass = () => {
  return config.gulp.src(config.path.source.sass, { sourcemaps: config.isDev })
    .pipe(config.plugins.plumber(
      config.plugins.notify.onError({
        title: "SASS",
        message: "Error: <%= error.message %>"
      }))
    )
    .pipe(config.plugins.replace(/@img\//g, '../img/'))
    .pipe($sass({
      outputStyle: 'expanded'
    }))
    .pipe(
      config.plugins.if(
        config.isBuild,
        queries()
      )
    )
    .pipe(
      config.plugins.if(
        config.isBuild,
        autoprefixer({
          grid: true,
          overrideBrowserslist: ["last 3 versions"],
          cascade: true
        })
      )
    )
    .pipe(
      config.plugins.if(
        config.isDev,
        config.gulp.dest(config.path.build.css)
      )
    )
    .pipe(
      config.plugins.if(
        config.isBuild,
        minimizer()
      )
    )
    .pipe(
      config.plugins.if(
        config.isBuild,
        rename({
          extname: '.min.css'
        })
      )
    )
    .pipe(
      config.plugins.if(
        config.isBuild,
        config.gulp.dest(config.path.build.css)
      )
    )
    .pipe(config.plugins.browsersync.stream())
}