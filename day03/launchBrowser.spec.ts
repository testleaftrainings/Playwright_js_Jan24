import { test, chromium, firefox } from "@playwright/test";

test(`To launch the browser`,async () => {

    //Create a new browser instance
    const browser = await chromium.launch({headless:false, channel:'msedge'});

    // Get the browser context
    const browserContext = await browser.newContext();

    // Create a new page
    const page = await browserContext.newPage();

    // Load the url

    await page.goto("http://leaftaps.com/opentaps/control/main");

    //To print the url

    console.log(page.url());
    
    await page.waitForTimeout(5000);

    
})

test.only(`To launch 2 browser contexts `,async () => {

    //Create a new browser instance
    const browser = await chromium.launch({headless:false, channel:'msedge'});

    // Get the browser context1
    const browserContext1 = await browser.newContext();

    //Create a new browser context2
    const browserContext2 =  await browser.newContext();

     // Create a new page using browser context1
     const page1 = await browserContext1.newPage();

     // Create a new page using browser context2
     const page2 = await browserContext2.newPage();

    // Load the url

    await page1.goto("http://leaftaps.com/opentaps/control/main");

    await page2.goto("https://leafground.com/")

    //To print the url
    
    console.log(page1.url());
    console.log(page2.url());
    
    await browserContext1.close();
    await browserContext2.close();
    await browser.close();
    
    // await page1.waitForTimeout(5000);
    // await page2.waitForTimeout(5000);

    
})



/**
 * Classroom
 * 
 * Create a new browser instance
 * Create a new browser context
 * Create a new page
 * Load the url 
 * https://login.salesforce.com/
 * Print the url
 * 
 */