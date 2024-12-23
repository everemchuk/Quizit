import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./build`
const sourceFolder = `./source`

const path = {
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/images/`,
		svg: `${buildFolder}/images/svg/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/files/`
	},
	source: {
		js: `${sourceFolder}/js/index.js`,
		images: `${sourceFolder}/assets/images/**/*.{jpg,jpeg,png,gif,webp}`,
		fonts: `${sourceFolder}/assets/fonts/`,
		svg: `${sourceFolder}/assets/images/svg/*.svg`,
		sass: `${sourceFolder}/sass/index.sass`,
		html: `${sourceFolder}/pug/index.pug`,
		files: `${sourceFolder}/assets/files/**/*.*`
	},
   watch: {
		js: `${sourceFolder}/js/**/*.js`,
		sass: `${sourceFolder}/sass/**/*.sass`,
		html: `${sourceFolder}/**/*.pug`,
		images: `${sourceFolder}/assets/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
		svg: `${sourceFolder}/assets/images/svg/*.svg`,
		files: `${sourceFolder}/assets/files/**/*.*`
	},
  clean: buildFolder,
	buildFolder,
	sourceFolder,
	rootFolder,
	ftp: ``
}

export default path