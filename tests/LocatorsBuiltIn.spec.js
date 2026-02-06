const { test, expect } = require("@playwright/test");

test("Built-InLocators", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  // getByAltText()
  const logo = await page.getByAltText("company-branding");
  await expect(logo).toBeVisible();

  // getByPlaceholder()
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");

  // getByRole
  await page.getByRole("button", { type: "submit" }).click();

  //getByText

  const name = await page.locator('.oxd-userdropdown-name').textContent()
  await expect(page.getByText(name)).toBeVisible();
});
 