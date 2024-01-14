import { chromium, test  } from "@playwright/test";

test('TC001 Creating a new lead',async () => {

    //setup
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();

    //Test steps
    await page.goto("http://leaftaps.com/opentaps/control/main");
    
    //Login
    await page.getByLabel("Username").fill("Demosalesmanager");

    //To clear any text 
    await page.getByLabel("Username").clear();

    await page.getByLabel("Username").fill("DemoCSR");
    await page.getByLabel("Password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();

    //Click CRM/SFA
    console.log(await page.getByText("CRM/SFA").innerText());
    
    await page.locator("text=CRM/SFA").click();

    
})