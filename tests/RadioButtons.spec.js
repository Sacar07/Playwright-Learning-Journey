const { test, expect } = require("@playwright/test");

test("Handle Input Box", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Radio Button --- Gender
  //   await page.locator("#male").check();
  await page.check("#male");
  await expect(page.locator("#male")).toBeChecked();
  await expect(page.locator("#male").isChecked()).toBeTruthy();


  await expect(await page.locator('#female').isChecked()).toBeFalsy();


  await page.waitForTimeout(5000);
});
