import {chromium, Browser, Page} from 'playwright';
// function functionName(parameters: type): return type
async function navigateAndPerformAction(url: string, action: 'screenshot' | 'title'): 
Promise<string | void>{

   const browser: Browser=  await chromium.launch();
   const page:Page = await browser.newPage();
   await page.goto(url);

   if(action === 'screenshot'){
        const screenshotPath = 'screenshot.png';
        await page.screenshot({path:screenshotPath});
        await page.close();
        return `Screenshot saved as ${screenshotPath}`;

   } else if (action === 'title') {
        const title = await page.title();
        await browser.close();
        return title;
   }

   await browser.close();
}

async function runTest(){

    const screenshotResult = await navigateAndPerformAction
                            ("http://leaftaps.com/opentaps/control1/main", 'screenshot');

    console.log(screenshotResult);
                           
    const titleResult = await navigateAndPerformAction
                            ("http://leaftaps.com/opentaps/control1/main", 'title');

    console.log(titleResult);

}
runTest();