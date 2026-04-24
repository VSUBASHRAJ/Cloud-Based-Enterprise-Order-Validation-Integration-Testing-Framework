import { test, expect } from '@playwright/test';

test('UI + API Order Flow', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.fill('#product', 'Laptop');
  await page.fill('#quantity', '2');

  await page.click('#submitOrder');

  // Check initial status
  await expect(page.locator('#status')).toHaveText('Processing');

  // Wait for completion
  await expect(page.locator('#status')).toHaveText('Completed', { timeout: 5000 });
});

test('Invalid Order UI Validation', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.fill('#product', 'Laptop');
  await page.fill('#quantity', '-1');

  await page.click('#submitOrder');

  await expect(page.locator('#error')).toContainText('Invalid quantity');
});