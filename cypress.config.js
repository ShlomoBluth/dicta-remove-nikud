const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '2jrsy1',
  screenshotOnRunFailure: false,
  defaultCommandTimeout: 10000,
  reporter: 'cypress-multi-reporters',
  failOnStatusCode: false,
  reporterOptions: {
    configFile: 'dicta-shared/reporter-config.json',
  },
  env: {
    DEV_URL: '',
    LIVE_URL: 'https://removenikud.dicta.org.il/',
    TOOL_TESTS: true,
    REQUESTS_TESTS: false,
    RECORD_KEY: '198c7ae4-89cb-4533-84a4-c1e3933f4b54',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://removenikud.dicta.org.il/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
