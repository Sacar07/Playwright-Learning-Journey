import { expect, test } from "@playwright/test";

test("Page Screenshot", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  await page.screenshot({
    path: "tests/screenshots/" + Date.now() + "HomePage.png",
  });
});

test("Full Page Screenshot", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  await page.screenshot({
    path: "tests/screenshots/" + Date.now() + "FullPage.png",
    fullPage: true,
  });
});

test.only("Element Screenshot", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.locator("(//div[@class='col-lg-4 col-md-6 mb-4'])[1]").screenshot({
    path: "tests/screenshots/" + Date.now() + "Samsung.png",
  });
  await page.waitForTimeout(5000);
});
