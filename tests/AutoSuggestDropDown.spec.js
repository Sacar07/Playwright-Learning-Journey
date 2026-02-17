const { test, expect } = require("@playwright/test");

test("Auto Suggest Dropdown", async ({ page }) => {
  await page.goto("https://www.redbus.in/");

  await page.waitForTimeout(5000);
});
