const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      prodURL: "https://felipe300.github.io/devops-fundamentals/",
      devURL: "http://localhost:1111/",
    },
  },
};
