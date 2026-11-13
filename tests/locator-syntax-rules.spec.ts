import test from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playground.bondaracademy.com/");
  await page.getByText("Forms").click();
  await page.getByText("Form Layouts").click();
});

test("Locator Syntax Rules", async ({ page }) => {
    //find by Tag
    page.locator('input')

    //find by ID
    page.locator('#inputEmail1')

    //find by class value
    page.locator('.shape-rectangle')

    //find by any attribute
    page.locator('[placeholder="Email"]')

    //find by full class value
    page.locator('[class="menu-sidebar left expanded"]')

    //find by several selectors
    page.locator('input[placeholder="Email"][nbinput]')

    //find by Xpath (NOT RECOMMENDED)
    page.locator('//*[@id="inputEmail1"]')

    //find by text
    page.locator(':text("Using")')

    //find by exact text match
    page.locator(':text-is("Using the Grid")')
});
