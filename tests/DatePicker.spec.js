const { test, expect } = require("@playwright/test");

test("Date Picker", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //   await page.fill("#datepicker","02/19/2026");

  //date picker
  const year = "2020";
  const month = "March";
  const date = "30";

  await page.click("#datepicker"); //opens calender

  let attempts = 0;

  while (attempts < 50) {
    attempts++;

    const currentYear = await page.locator(".ui-datepicker-year").textContent();
    const currentMonth = await page
      .locator(".ui-datepicker-month")
      .textContent();

    // console.log("year is", currentYear);
    // console.log("month is ", currentMonth);

    if (currentYear == year && currentMonth == month) {
      break;
    } else if (parseInt(currentYear) < parseInt(year)) {
      await page.locator(".ui-icon.ui-icon-circle-triangle-e").click(); //next
    } else {
      await page.locator(".ui-icon.ui-icon-circle-triangle-w").click(); //previous
    }
  }

  // const dates = await page.$$("//a[@class='ui-state-default']");

  // for (const dt of dates) {
  //   if ((await dt.textContent()) == date) {
  //     await dt.click();
  //     break;
  //   }
  // }

  //Date selection - without loop
  await page.click(`//a[@class='ui-state-default'][text()= '${date}']`);

  await page.waitForTimeout(5000);
});
