// playwright.config.js

// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

  // Folder test
  testDir: './tests',

  // Timeout setiap test
  timeout: 30 * 1000,

  // Assertion timeout
  expect: {
    timeout: 5000,
  },

  // Parallel testing
  fullyParallel: true,

  // Stop jika banyak gagal di CI
  forbidOnly: !!process.env.CI,

  // Retry jika gagal
  retries: process.env.CI ? 2 : 0,

  // Worker
  workers: process.env.CI ? 1 : undefined,

  // Reporter
  reporter: [
    ['html'],
    ['list']
  ],

  // Global config browser
  use: {

    // Base URL
    baseURL: 'https://parabank.parasoft.com/parabank',

    // Browser mode
    headless: false,

    // Screenshot otomatis
    screenshot: 'only-on-failure',

    // Video recording
    video: 'retain-on-failure',

    // Trace viewer
    trace: 'on-first-retry',

    // Browser viewport
    viewport: {
      width: 1440,
      height: 900,
    },

    // Ignore HTTPS error
    ignoreHTTPSErrors: true,

    // Action timeout
    actionTimeout: 10000,

    // Navigation timeout
    navigationTimeout: 30000,
  },

  // Multi browser projects
  projects: [

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },

  ],

  // Folder report
  outputDir: 'test-results/',

});


    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  // ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
// });
