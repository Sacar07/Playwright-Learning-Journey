const { test, expect } = require("@playwright/test");

test("Mouse Hover Action", async ({ page }) => {
  await page.goto("https://kataho.app/");

  const solutions = await page.locator(
    "(//a[normalize-space()='Solutions'])[1]",
  );

  const plateAndAddressing = page.locator(
    "//ul[@aria-labelledby='navbarPages']//section//div//div//div//div//li//a[@href='https://kataho.app/plate']",
  );

  const KatahoTag = page.locator(
    ".dropdown-item[href='https://kataho.app/katahotag']",
  );

  //mouse hover
  await solutions.hover();
  await plateAndAddressing.hover();
  await KatahoTag.hover();

  await page.waitForTimeout(5000);
});
