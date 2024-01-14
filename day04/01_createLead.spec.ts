import { chromium, test  } from "@playwright/test";

test('TC001 Creating a new lead',async () => {

    //setup
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();

    //Test steps
    await page.goto("http://leaftaps.com/opentaps/control/main");
    
    //Login
    await page .locator("#username").fill("Demosalesmanager");
    await page.locator("[id='password']").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();

    //Click CRM/SFA
    await page.locator("text=CRM/SFA").click();

    
})

test.only('TC002 Creating a new lead',async () => {

    //setup
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();

    //Test steps
    await page.goto("http://leaftaps.com/opentaps/control/main");
    
    //Login
    await page.fill("#username", "Demosalesmanager");
    await page.fill("[id='password']", "crmsfa");
    await page.click(".decorativeSubmit");

    //Click CRM/SFA
    await page.click("text=CRM/SFA");

    //Click Leads
    await page.click("text=Leads");

    //Click Create Lead
    await page.click("text = Create Lead");

    //Enter the company name
    await page.fill("#createLeadForm_companyName", "Testleaf");


    //Enter the first name
    await page.locator("[name='firstName']").nth(2).fill("Ranjini");

    //Enter the last name
    await page.fill("#createLeadForm_lastName", "R");

    //Click Submit
    await page.click(".smallSubmit");
    
    //Verify the status
    const status = await page.innerText("#viewLead_statusId_sp");
    console.log(`The status of the lead is ${status}`);

})