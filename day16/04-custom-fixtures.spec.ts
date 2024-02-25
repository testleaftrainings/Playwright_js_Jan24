import {test as baseTest } from "@playwright/test";

//Common fixture at the beginning of the test
export const test = baseTest.extend({
    page:async ({page}, use) => {

        await page.goto("https://login.salesforce.com/");
        await page.fill("#username","ranjini.r@testleaf.com");
        await page.fill("#password","Testleaf$1234");
        await page.click("#Login");

        await use(page);
        
    }

})