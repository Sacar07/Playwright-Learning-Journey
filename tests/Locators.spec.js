// const {test,expect} = require('@playwright/test')
import {test,expect} from '@playwright/test'

test('Locators', async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  //Click on login button    - property
  await page.locator("id=login2").click();
  // await page.click("id=login2")

  //Provide username - CSS
  await page.locator("#loginusername").fill("Sacar");
  // await page.fill("#loginusername", "Sacar");
  // await page.type('#loginusername', "Sacar")

  //provide password - CSS
  await page.locator("#loginpassword").fill("Test@1234");
  // await page.fill("input[id='loginpassword']","Test@1234")

  //click on login button - XPath
  await page.click("//button[normalize-space()='Log in']");

//   verify logout link presence  - XPath
//   const logoutLink = await page.locator("//a[@id='logout2']");

  //verify logout link presence  - CSS
  const logoutLink = await page.locator('#logout2');

  await expect(logoutLink).toBeVisible();

  await page.close();
})