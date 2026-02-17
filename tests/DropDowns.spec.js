const { test, expect } = require("@playwright/test");

test("Handle Dropdowns", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Multiple ways to select option from the dropdown

  //   await page.locator("#country").selectOption({ label: "Germany" }); //label/ visible text
  //   await page.locator("#countsry").selectOption("germany"); //visible text
  //   await page.waitForTimeout(5000);

  //   await page.locator("#country").selectOption({ value: "uk" }); // by using value
  //   await page.locator("#country").selectOption({ index: 1 }); // by using index

  //   await page.selectOption("#country", "germany"); // by text

  //Assertions
  //1) Check number of options in dropdown -- Approach 1
  //   const options = page.locator("#country option");
  //   await expect(options).toHaveCount(10);

  //2) Check number of options in dropdown -- Approach 2
  //   const options = await page.$$("#country option");
  //   console.log("Number of options:", options.length);
  //   await expect(options.length).toBe(10);

  //3) Check the presence of value in the dropdown - approach 1
  //   const content = await page.locator("#country").textContent();
  //   expect(content.includes("germany")).toBeTruthy();
  //   console.log("content is ", content);

  //4) checking presence of value in the dropdown - approach 2 - using looping

  /* const options = await page.$$("#country option");
  let status = false;

  for (const option of options) {
    // console.log(await option.textContent());
    let value = await option.textContent();
    if (value.includes("France")) {
      status = true;
      break;
    }
  }

  expect(status).toBeTruthy(); */

  //5) Select option from dropdown using loop
  const options = await page.$$("#country option");

  for (const option of options) {
    // console.log(await option.textContent());
    let value = await option.textContent();
    if (value.includes("France")) {
      const optionValue = await option.getAttribute("value");
      await page.selectOption("#country", optionValue);
      break;
    }
  }

  await page.waitForTimeout(5000);
});
 