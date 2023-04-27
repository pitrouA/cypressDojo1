const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'v24yn7',
  e2e: {
    chromeWebSecurity: false
  },
});
