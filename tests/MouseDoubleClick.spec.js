const { test, expect } = require("@playwright/test");

test("Mouse Double Click", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const btn = page.locator("//button[normalize-space()='Copy Text']");

  //double click
  await btn.click({ clickCount: 2 });
  //   await btn.dblclick();
  const f2 = page.locator("#field2");

  await expect(f2).toHaveValue("Hello World!");

  await page.waitForTimeout(5000);
});
