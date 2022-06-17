const { defineConfig } = require('cypress')

module.exports = defineConfig({
	viewportWidth: 1280,
	viewportHeight: 720,
	chromeWebSecurity: false,
	projectId: 'atyyam',
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
})
