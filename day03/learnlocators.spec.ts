import { chromium, test } from "@playwright/test";

test(`Locate different web elements`,async () => {

    const browser = await chromium.launch({headless:false});
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();

    await page.goto("http://leaftaps.com/opentaps/control/main");

    // Enter the username
    await page.locator("#username").fill("Demosalesmanager");
   
    // Enter the password
    await page.locator("[name='PASSWORD']").fill("crmsfa");
   
    // Click the login button

    await page.locator(".decorativeSubmit").click();

   


    
})