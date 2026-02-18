const { test, expect } = require("@playwright/test");

test("Frames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  //total number of frames
  const allFrames = await page.frames();
  console.log("number of frames:", allFrames.length);

  //approach 1: using name or url of the frame
  //   const frame1 = await page.frame('name') //if name is present
  //   const frame1 = await page.frame({
  //     url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  //   });
  //   await frame1.fill("[name ='mytext1']", "Hello world");

  //approach 2- using frame locator
  const inputBox = await page
    .frameLocator("frame[src='frame_1.html']")
    .locator("[name ='mytext1']");
  await inputBox.fill("Hello world");

  await page.waitForTimeout(5000);
});
