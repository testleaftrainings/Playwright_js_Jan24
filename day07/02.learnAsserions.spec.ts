import { test, expect } from "@playwright/test";

test('Assert a text box', async({page})=>{

/**
 * 
 * Fixtures - test fixture
 * Setup - initializing browser, creating a context and page
 * tear down - closing the page, context, browser
 * 
 * 
 */
    page.goto("https://leafground.com/input.xhtml;");
    const typeName = page.getByPlaceholder("Babu Manickam");
    await expect(typeName).toBeEnabled();
    await typeName.fill("Testleaf");
    const disabled = page.getByPlaceholder("Disabled");
    await expect(disabled).toBeEnabled();
    await disabled.fill("Testleaf");
    //await expect(page.getByPlaceholder("Disabled")).toBeDisabled();

})

/***
 * 
 * Assertions
 * Auto retrying assertions
 * 
 * expect library - timeout is 5000ms
 * 5 s --> 0.5 s
 * `       0.5 s
 *         0.5 s
 * 
 * 
 * Non retrying assertions
 * There are no retrying mechanisms available
 * 
 * Negating assertions
 * 
 * await expect(locator).not.toContainText('Up to 75% off ')
 * 
 * 
 * 
 */