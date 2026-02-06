import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('Sacar');
  await page.locator('#loginpassword').fill('Test@1234');
  await page.getByRole('button', { name: 'Log in' }).click();
});