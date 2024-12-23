import fs from 'fs'
import fonter from 'gulp-fonter-fix'
import ttf2woff2 from 'gulp-ttf2woff2'

export const otf_ttf = () => {
	return config.gulp.src(`${config.path.source.fonts}*.otf`, {})
		.pipe(config.plugins.plumber(
			config.plugins.notify.onError({
				title: "FONTS",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(fonter({
			formats: ['ttf']
		}))
		.pipe(config.gulp.dest(`${config.path.source.fonts}`))
}

export const ttf_woff = () => {
	return config.gulp.src(`${config.path.source.fonts}*.ttf`, {})
		.pipe(config.plugins.plumber(
			config.plugins.notify.onError({
				title: "FONTS",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(fonter({
			formats: ['woff']
		}))
		.pipe(config.gulp.dest(`${config.path.build.fonts}`))
		.pipe(config.gulp.src(`${config.path.source.fonts}*.ttf`))
		.pipe(ttf2woff2())
		.pipe(config.gulp.dest(`${config.path.build.fonts}`))
		.pipe(config.gulp.src(`${config.path.source.fonts}*.{woff,woff2}`))
		.pipe(config.gulp.dest(`${config.path.build.fonts}`))
}

export const font = () => {
	let fontsFile = `${config.path.sourceFolder}/sass/base/fonts/_fonts.sass`;
	fs.readdir(config.path.build.fonts, function (err, fontsFiles) {
		if (fontsFiles) {
			if (!fs.existsSync(fontsFile)) {
				fs.writeFile(fontsFile, '', cb);
				let newFileOnly;
				for (var i = 0; i < fontsFiles.length; i++) {
					let fontFileName = fontsFiles[i].split('.')[0]
					if (newFileOnly !== fontFileName) {
						let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName
						let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName
						if (fontWeight.toLowerCase() === 'thin') {
							fontWeight = 100;
						} else if (fontWeight.toLowerCase() === 'extralight') {
							fontWeight = 200;
						} else if (fontWeight.toLowerCase() === 'light') {
							fontWeight = 300;
						} else if (fontWeight.toLowerCase() === 'medium') {
							fontWeight = 500;
						} else if (fontWeight.toLowerCase() === 'semibold') {
							fontWeight = 600;
						} else if (fontWeight.toLowerCase() === 'bold') {
							fontWeight = 700;
						} else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
							fontWeight = 800;
						} else if (fontWeight.toLowerCase() === 'black') {
							fontWeight = 900;
						} else {
							fontWeight = 400;
						}
						fs.appendFile(fontsFile, `@font-face \n\tfont-family: ${fontName}\n\tfont-display: swap\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff")\n\tfont-weight: ${fontWeight}\n\tfont-style: normal\n\r\n`, cb);
						newFileOnly = fontFileName;
					}
				}
			} else {
				console.log("Файл sass/fonts.sass уже существует. Для обновления файла нужно его удалить!")
			}
		} else {
      console.log('Локальных шрифтов не существует!')
    }
	});

	return config.gulp.src(`${config.path.sourceFolder}`)
	function cb() { }
}