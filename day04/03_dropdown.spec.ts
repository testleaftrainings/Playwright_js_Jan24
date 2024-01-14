import { chromium, expect, test  } from "@playwright/test";


test('TC003 Test to select a value from the dropdown',async () => {

    //setup
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();

    //Test steps
    await page.goto("http://leaftaps.com/opentaps/control/main");

    const urlCheck = page.url();
    expect.soft(urlCheck).toContainEqual("http://leaftaps.com/opentaps/control/main");

    //Login
    await page.fill("#username", "Demosalesmanager");
    await page.fill("[id='password']", "crmsfa");
    await page.click(".decorativeSubmit");

    //Click CRM/SFA
    await page.click("text=CRM/SFA");

    //Click Lead
    await page. getByRole('link', { name: 'Leads', exact: true }).click();

    //Click Create Lead
    await page.click("text = Create Lead");
    //Enter the company name
    await page.fill("#createLeadForm_companyName", "Testleaf");


    //Enter the first name
    await page.locator("[name='firstName']").nth(2).fill("Ranjini");

    //Enter the last name
    await page.fill("#createLeadForm_lastName", "R");

    //Locate the dropdown
   // const currency = page.locator("#createLeadForm_currencyUomId")

   //Select the dropdown value from the preferred currency
    await page.selectOption("#createLeadForm_currencyUomId", {label:'DKK - Danish Krone'});

    //To get the count of values --> count()
    const dropdown = page.locator("#createLeadForm_currencyUomId option");
    const ddCount = await dropdown.count();

    for (let index = 0; index < ddCount; index++) {
      
        console.log(await dropdown.nth(index).innerText());
            
    }

    //Select the dropdown value from State
    await page.selectOption('#createLeadForm_generalStateProvinceGeoId', {value:'SC'});

    //Click Submit
    await page.click(".smallSubmit");
    
    //Verify the status
    const status = await page.innerText("#viewLead_statusId_sp");
    console.log(`The status of the lead is ${status}`);

   

})



