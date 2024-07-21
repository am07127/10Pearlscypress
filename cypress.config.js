const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: 'y2wxn1',
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
