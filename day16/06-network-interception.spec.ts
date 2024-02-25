import { test } from "@playwright/test";

test.describe(`Intercepting the API`,async()=>{

    test(`Login to salesforce`,async({page})=>{

        page.route("**/aura?preloadActions", async (route, request) => {

            if(request.method() === 'POST'){
                console.log(request.url());
                console.log(await request.allHeaders());
                const response = await request.response();
                const bodyContents = await response?.body();

            } else{

                route.continue();
            }
            
        })        
        await page.goto("https://login.salesforce.com/");
        await page.fill("#username","ranjini.r@testleaf.com");
        await page.fill("#password","Testleaf$1234")
        await page.click("#Login")
        
        const appLauncherLocator = page.locator(".slds-icon-waffle")

        await appLauncherLocator.click()

        const viewAllLocator = page.getByLabel("View All Applications")
        await viewAllLocator.click()
    })
})
