import { deleteAsync } from 'del'
import zipPlugin from 'gulp-zip'

export const zip = () => {
	deleteAsync(`./${config.path.rootFolder}.zip`);
	return config.gulp.src(`${config.path.buildFolder}/**/*.*`, {})
		.pipe(config.plugins.plumber(
			config.plugins.notify.onError({
				title: "ZIP",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(zipPlugin(`${config.path.rootFolder}.zip`))
		.pipe(config.gulp.dest('./'));
}