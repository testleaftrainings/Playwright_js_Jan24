import { test } from "@playwright/test";

test("Testing Shadow DOM", async({page})=>{

    await page.goto("https://dev199689.service-now.com/");
    await page.fill("#user_name", "admin");
    await page.fill("#user_password", "kD2f8lBl$D^F");
    await page.click("#sysverb_login");

    //Present inside the shadow-root 
    //Click All
    await page.getByRole("button", {name:"All"}).click();
    //Enter the input as Incidents
    await page.getByPlaceholder("Filter").fill("Incidents");
    //await page.getByLabel("Incidents",{exact: true}).click();
    //Click Incidents from the filtered menu
    await page.locator('a').filter({ hasText: /^Incidents$/ }).click();
    await page.waitForTimeout(5000);

})