const { test, expect } = require("@playwright/test");

test("Handle Dropdowns", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Select multiple options from multi select dropdown
  //   await page.selectOption("#colors", ["Blue", "Red", "Yellow"]);

  //Assertions
  //1) Check number of options in dropdown
  //   const options = page.locator("#colors option");
  //   await expect(options).toHaveCount(7);

  //2) check number of options in dropdown using JS array
  //   const options = await page.$$("#colors option");
  //   console.log("number of options:", options.length);
  //   expect(options.length).toBe(7);

  //3) check presence of value in the dropdown
  const content = await page.locator("#colors").textContent();
  console.log(content);
  await expect(content.includes("Blue")).toBeTruthy();
  await expect(content.includes("Black")).toBeFalsy();

  await page.waitForTimeout(5000);
});
