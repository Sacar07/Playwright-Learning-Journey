const { test, expect } = require("@playwright/test");

test("Handle Checkboxes", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Single Checkbox
  await page.locator("#monday").check();
  //   await page.check("#sunday")

  await expect(page.locator("#monday")).toBeChecked();
  expect(await page.locator("#monday").isChecked()).toBeTruthy();

  expect(await page.locator("#sunday").isChecked()).toBeFalsy();

  // Multiple Checkboxes
  const checkboxLocators = ["#sunday", "#monday", "#saturday"];

  for (const locator of checkboxLocators) {
    // select multiple checkboxes
    await page.locator(locator).check();
  }
  await page.waitForTimeout(5000);

  // uselect multiple checkboxes which are already selected
  for (const locator of checkboxLocators) {
    if (await page.locator(locator).isChecked()) {
      await page.locator(locator).uncheck();
    }
  }

  await page.waitForTimeout(5000);
});
