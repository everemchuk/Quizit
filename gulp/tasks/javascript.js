import webpack from 'webpack-stream'

export const js = () => {
  return config.gulp.src(config.path.source.js, { sourcemaps: config.isDev })
    .pipe(config.plugins.plumber(
      config.plugins.notify.onError({
        title: "JS",
        message: "Error: <%= error.message %>"
      }))
    )
    .pipe(webpack({
      mode: config.isBuild ? 'production' : 'development',
      output: {
        filename: config.isBuild ? 'index.min.js' : 'index.js'
      }
    }))
    .pipe(config.gulp.dest(config.path.build.js))
    .pipe(config.plugins.browsersync.stream())
}