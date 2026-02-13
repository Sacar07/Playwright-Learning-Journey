const { test, expect } = require("@playwright/test");

test("Assertions Test", async ({ page }) => {
  // open app url
  await page.goto("https://demo.nopcommerce.com/register");

  //expect page to have URL
  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  //expect page has title
  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  //expect locator to be visible
  const logoElement = page.locator(".header-logo");
  await expect(logoElement).toBeVisible();

  //expect locator to be enabled
  const seachStoreBox = page.locator("#small-searchterms");
  await expect(seachStoreBox).toBeEnabled();

  //expect radio/checkbox button to be checked
  const maleRadioButton = page.locator("#gender-male");
  await maleRadioButton.click(); // select radio button
  await expect(maleRadioButton).toBeChecked();

  //checkbox
  const newsletterCheckbox = page.locator(
    "#NewsLetterSubscriptions_0__IsActive",
  );
  await expect(newsletterCheckbox).toBeChecked();

  // expect Element has attribute
  const regButton = page.locator("#register-button");
  await expect(regButton).toHaveAttribute("type", "submit");

  //expect element matches text
  await expect(page.locator(".page-title h1")).toHaveText("Register");

  // expect element contains text
  await expect(page.locator(".page-title h1")).toContainText("Reg");

  // expect input has value
  const emailInput = page.locator("#Email");
  await emailInput.fill("test@demo.com");
  await expect(emailInput).toHaveValue("test@demo.com");

  //expect list of elements has given length
  const options = page.locator("#customerCurrency option");
  await expect(options).toHaveCount(2);
});



