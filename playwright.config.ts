import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',        // record trace if test fails
    screenshot: 'only-on-failure',  // screenshot on failure
    video: 'retain-on-failure'      // video on failure
  },

  reporter: [
    ['list'], 
    ['html', { open: 'never' }]   // HTML report
  ]
});