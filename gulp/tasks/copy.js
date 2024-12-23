export const copy = () => {
	return config.gulp.src(config.path.source.files)
		.pipe(config.gulp.dest(config.path.build.files))
}