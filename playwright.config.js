// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
 
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [ 
    ['list'],// default console reporter
    ['html'], 
    ['allure-playwright']
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    // Opens browser in headed mode
    // false = browser UI will be visible during execution
    headless: false,

    // Browser window size / screen resolution
    viewport: { width: 1920, height: 1080 },

    // Trace collection settings
    // Keeps Playwright trace only when test fails
    // Useful for debugging failures
    trace: 'retain-on-failure',

    // Capture screenshot only if test fails
    screenshot: 'only-on-failure',

    // Save video recording only for failed tests
    video: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {

        // Browser engine to use
        // chromium = Chrome/Edge engine
        browserName: 'chromium',

        // Browser launch configuration
        launchOptions: {

          // Adds delay (in milliseconds) between actions
          // Helps visually observe automation steps
          slowMo: 150,

          // Additional Chromium launch arguments
          args: [

            // Opens browser in maximized mode
            '--start-maximized',

            // Explicit browser window size
            '--window-size=1920,1080'
          ]
        }
      },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

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
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

