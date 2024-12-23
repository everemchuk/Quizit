const server = (done) => {
	config.plugins.browsersync.init({
		server: {
			baseDir: `${config.path.build.html}`
		},
		notify: false,
		port: 3000,
	})
}

export default server