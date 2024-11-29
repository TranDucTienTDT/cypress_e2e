import { defineConfig } from "cypress";
import { allureCypress } from "allure-cypress/reporter";

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.phptravels.net/',
    setupNodeEvents: (on, config) => {
      allureCypress(on, config);

      return config;
    },
    // ...
  },
});