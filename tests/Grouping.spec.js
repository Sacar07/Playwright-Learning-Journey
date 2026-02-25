const { test, expect } = require("@playwright/test");

test.beforeEach(async()=> {
  console.log("this is beforeEach Hook");
})

test.afterEach(async()=> {
  console.log("this is afterEach Hook");
})

test.beforeAll(async()=> {
  console.log("this is beforeAll Hook");
})

test.afterAll(async()=> {
  console.log("this is afterAll Hook");
})

test.describe.skip("Group 1", () => {
  test("Test1", async ({ page }) => {
    console.log("This is Test 1...");
  });

  test("Test2", async ({ page }) => {
    console.log("This is Test 2...");
  });
});

test.describe("Group 2", () => {
  test("Test3", async ({ page }) => {
    console.log("This is Test 3...");
  });

  test("Test4", async ({ page }) => {
    console.log("This is Test 4...");
  });
});
