const { test, expect } = require("@playwright/test");

test("Mouse Double Click", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const source = page.locator("#draggable");
  const target = page.locator("#droppable");

  //approach 1
  /*  await source.hover();
  await page.mouse.down();

  await target.hover();
  await page.mouse.up(); */

  //approach 2
  await source.dragTo(target);

  await page.waitForTimeout(5000);
});
