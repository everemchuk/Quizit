import pug from "gulp-pug"
import versionNumber from 'gulp-version-number'

export const html = () => {
	return config.gulp.src(config.path.source.html)
		.pipe(config.plugins.plumber(
			config.plugins.notify.onError({
				title: "HTML",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(pug({
			pretty: config.isDev,
			verbose: true
		}))
		.pipe(
			config.plugins.if(
				config.isBuild,
				versionNumber({
					'value': '%DT%',
					'append': {
						'key': '_v',
						'cover': 0,
						'to': [
							'css',
							'js',
						]
					},
					'output': {
						'file': 'gulp/version.json'
					}
				})
			)
		)
		.pipe(config.plugins.replace(/@img\//g, 'images/'))
		.pipe(config.plugins.replace(/@svg\//g, 'images/svg/'))
		.pipe(config.gulp.dest(config.path.build.html))
		.pipe(config.plugins.browsersync.stream())
}