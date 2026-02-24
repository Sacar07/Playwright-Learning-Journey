const { test, expect } = require("@playwright/test");

test("Single File", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page
    .locator("#singleFileInput")
    .setInputFiles(
      "tests/uploadFiles/SACAR-SHRESTHA-FlowCV-Resume-20260224.pdf",
    );

  await page.waitForTimeout(5000);
});

test.only("Multiple Files", async ({ page }) => {
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

  await page
    .locator("#filesToUpload")
    .setInputFiles([
      "tests/uploadFiles/SACAR-SHRESTHA-FlowCV-Resume-20260224.pdf",
      "tests/uploadFiles/O_HRM_TS.xlsx",
    ]);
  await page.waitForTimeout(5000);

  (expect(page.locator("#fileList li:nth-child(1)")).toHaveText(
    "SACAR-SHRESTHA-FlowCV-Resume-20260224.pdf",
  ),
    expect(page.locator("#fileList li:nth-child(2)")).toHaveText(
      "O_HRM_TS.xlsx",
    ));

  await page.waitForTimeout(5000);

  //Removing files
  await page.locator("#filesToUpload").setInputFiles([]);
  await page.waitForTimeout(5000);

  expect(page.locator("(//ul[@id='fileList'])[1]")).toHaveText(
    "No Files Selected",
  );
  await page.waitForTimeout(5000);
});
