/**
 * Handling the windows
 * 
 * First Approach
 * 1. Create a promise in your code to tell that this will resolve into a new page
 *     const windowPromise = context.waitForEvent("page")
 * 2. Now perform the user action which is supposed to open a new window
 *      await page.getByText("Open").click()
 * 3. Now wait for the promise to get completed (for the promise you created in step 1)
 *      const window = await windowPromise
 * 4. Switch to the new window for performing further actions
 *      window.bringToFront()
 * 
 * 
 */
import { test, expect } from "@playwright/test";

test(`Test to handle a new window`, async({page, context})=>{
    await page.goto("https://leafground.com/window.xhtml");
    const windowPromise = context.waitForEvent("page");
    await page.getByText("Open", {exact:true}).click();
    const window = await windowPromise; //new page gets opened
    await expect(window).toHaveURL("https://leafground.com/dashboard.xhtml");
    console.log(`The url of the new window is ${window.url()}`);    
  
    //Interacting with the new window
    await window.fill("#email", "rr7@gmail.com");
    await window.waitForTimeout(5000);
    await window.close();

    //Interact with main window
    await page.click("i[class='pi pi-home layout-menuitem-icon']");
    await page.waitForTimeout(2000);
})
test(`Test to handle a window using Promise.all`, async({page, context})=>{
    await page.goto("https://leafground.com/window.xhtml");
    const [newWindow] = await Promise.all([
        context.waitForEvent("page"),
        page.getByText("Open", {exact:true}).click()
    ])
    console.log(newWindow.url());
    await newWindow.fill("#email", "rr7@gmail.com");
    //await newWindow.close();
       //Interact with main window
       await page.click("i[class='pi pi-home layout-menuitem-icon']");
       await page.waitForTimeout(2000);
 
})
test.only(`Test to handle multiple tabs`, async({page, context})=>{
    await page.goto("https://leafground.com/window.xhtml");
    const [multiPage] = await Promise.all([
        context.waitForEvent("page"),
        page.getByText("Open Multiple", {exact:true}).click()
    ])
    //No. of pages geting opened
    const pages = multiPage.context().pages();
    console.log(`No. of pages opened: ${pages.length}`);
    
    
    pages.forEach(tabs =>{
        const tabName = tabs.url();
        console.log(`Url of the page is ${tabName}`);
        
    })
    let webPage: any;
    //const dashboard = await pages[2].bringToFront();
    for (let index = 0; index < pages.length; index++) {
        const title = await pages[index].title();
        console.log(`The title of the page: ${title}`);
        
        if(title === 'Web Table'){
            webPage = pages[index];
        }
        
    }
    await webPage.fill("input[placeholder='Search']","Amy Elsner");
    await webPage.waitForTimeout(5000);
})