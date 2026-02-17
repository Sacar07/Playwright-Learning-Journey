const { test, expect } = require("@playwright/test");

test("Handle Bootstrap Multi Select Dropdown", async ({ page }) => {
  await page.goto(
    "https://www.jqueryscript.net/demo/Bootstrap-4-Multi-Select-BsMultiSelect/",
  );

  await page.locator(".dashboardcode-bsmultiselect").click();

  //1
  //   const options = page.locator("ul>li");
  //   await expect(options).toHaveCount(54);

  //2
  //   const options = await page.$$("li");
  //   await expect(options.length).toBe(54);

  //3 select options from dropdown
  /* const options = await page.$$("ul>li");
  for (let option of options) {
    const value = await option.textContent();
    // console.log("value is", value);
    if (value.includes("Texas") || value.includes("Ohio")) {
      await option.click();
    }
  } */

  //4 unselect option
  const options = await page.$$("ul>li:visible");
  for (let option of options) {
    const value = await option.textContent();
    // console.log("value is", value);
    if (value.includes("California") || value.includes("Pennsylvania")) {
      await option.click();
    }
  }

  await page.waitForTimeout(5000);
});
