import webp from 'gulp-webp'
import imagemin from 'gulp-imagemin'

export const img = () => {
  return config.gulp.src(config.path.source.images)
    .pipe(config.plugins.plumber(
      config.plugins.notify.onError({
        title: "IMAGES",
        message: "Error: <%= error.message %>"
      }))
    )
    .pipe(webp())
    .pipe(config.plugins.newer(config.path.build.images))
    .pipe(
      config.plugins.if(
        config.isBuild,
        imagemin({
          progressive: true,
          svgoPlugins: [{ removeViewBox: false }],
          interlaced: true,
          optimizationLevel: 3 // 0 to 7
        })
      )
    )
    .pipe(config.gulp.dest(config.path.build.images))
    .pipe(config.plugins.browsersync.stream())
}