const { test, expect } = require("@playwright/test");

test("Keyboard Actions", async ({ page }) => {
  await page.goto("https://gotranscript.com/text-compare");

  //   await page.locator('name="text1"').fill("hello world");
  await page.type("[name='text1']", "Hello world");

  //ctrl+A -- select the text

  await page.keyboard.press("Control+A");

  //ctrl+C -- copy the text

  await page.keyboard.press("Control+C");

  //Tab
  await page.keyboard.down("Tab");
  await page.keyboard.up("Tab");

  //ctrl+V

  await page.keyboard.press("Control+V");

  await page.waitForTimeout(5000);
});
