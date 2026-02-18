const { test, expect } = require("@playwright/test");

test("Auto Suggest Dropdown", async ({ page }) => {
  await page.goto("https://www.daraz.com.np/");

  await page.locator("#q").fill("Nike");
  await page.waitForSelector("//div[@class='suggest-list--3Tm8']//a/div/span");

  const searchOptions = await page.$$(
    "//div[@class='suggest-list--3Tm8']//a/div/span",
  );
  // console.log("options are", searchOptions);

  for (let option of searchOptions) {
    const value = await option.textContent();
    // console.log("value is", value);
    if (value.includes("Nike p6000")) {
      await option.click();
      break;
    }
  }

  await page.waitForTimeout(5000);
});
