/**
 * Frames - frames & iframes
 * //frame is depricated
 * iframe - inlineframe --> locate using //iframe  (after HTML 5)
 * 
 * How to identify the iframes?
 * 
 * 1. Right click on a web element and check the option "View Frame Source"
 * 2. Search for //iframe within DOM
 * 
 * Two approaches to interact with a frame
 * 1. Frame object
 * 2. framelocator
 * 
 */
import { test, expect } from "@playwright/test";

test(`Test to get the frame count`, async({page})=>{
    await page.goto("https://www.oneindia.com/");
    await page.waitForLoadState('load');
    const frameCount = page.frames().length;
    await page.waitForTimeout(2000);
    console.log(frameCount);
    await page.waitForTimeout(2000);

})

test('Test case to handle iframes using frame object', async({page})=>{

    await page.goto("https://leafground.com/frame.xhtml");
    const frameCount = page.frames().length;
    console.log(frameCount);
  
    //Locating the frame
    const frameSelect = page.frame({url:'https://leafground.com/default.xhtml'});
    await frameSelect?.click('button#Click');
   
})

test.only(`Test to handle frames using frameLocator`, async({page})=>{

    await page.goto("https://leafground.com/frame.xhtml");
    //Step1: Interacting with the frame using frameLocator
    const frame = page.frameLocator("iframe").first();
    await frame.locator("#Click").click();

   

    //Interacting with the nested frames
    const cardLocator = page.locator(".card").filter({hasText:'Click Me (Inside Nested frame)'});
    const frameButton = cardLocator.frameLocator('iframe');
    await frameButton.frameLocator('iframe').locator("#Click").click();
    
    await page.waitForTimeout(5000);

})