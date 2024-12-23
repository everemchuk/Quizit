export const svg = () => {
  return config.gulp.src(config.path.source.svg)
    .pipe(config.plugins.plumber(
      config.plugins.notify.onError({
        title: "IMAGES",
        message: "Error: <%= error.message %>"
      }))
    )
    .pipe(config.gulp.dest(config.path.build.svg))
    .pipe(config.plugins.browsersync.stream())
}