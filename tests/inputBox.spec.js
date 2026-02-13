const { test, expect } = require("@playwright/test");

test("Handle Input Box", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Input box -- name

  await expect(page.locator("#name")).toBeVisible();
  await expect(page.locator("#name")).toBeEmpty();
  await expect(page.locator("#name")).toBeEditable();
  await expect(page.locator("#name")).toBeEnabled();

  await page.fill("#name", "Sacar");

  await page.waitForTimeout(5000); //pausing code execution
});
