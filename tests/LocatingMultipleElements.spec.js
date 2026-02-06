const { test, expect } = require("@playwright/test");

test("LocateMultipleElements", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  // const links = await page.$$('a');

  // for(const link of links)
  // {
  //         const linkText = await link.textContent();
  //         console.log(linkText);
  // }


  /*Less optimised way --- better for static pages --- it gets the array from the element at once --- tries once only and if no element is got it doesnt try again */

  // page.waitForSelector("#tbodyid h4 a.hrefch");
  // const products = await page.$$("#tbodyid h4 a.hrefch");

  // for( const product of products ){
  //   const prodName = product.textContent();
  //   console.log(prodName);
  // }

  /* Better optimised way --- it tells playwright to keep on trying to get the element until it gets one --- best for dynamic web pages*/
  const productLinks = page.locator("#tbodyid h4 a.hrefch");

  // wait until at least one product is visible
  await productLinks.first().waitFor();

  // get text inside <a> tags
  const products = await productLinks.allTextContents();
  console.log(products);
  for (const product of products) {
    const productName = product.trim();
    console.log(productName);
  }
});
