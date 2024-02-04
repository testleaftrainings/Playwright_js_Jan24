import { test } from "@playwright/test";
import fs from'fs';
import path from "path";

const loginData = JSON.parse(fs.readFileSync(path.join(__dirname,'loginData.json'), 'utf-8'));
for(const credentials of loginData){
test(`Login Test for${credentials.username}`, async({page})=>{

    await page.goto("https://login.salesforce.com/");
    await page.fill("#username", credentials.username)
    await page.fill("#password", credentials.password);
    await page.click("#Login");

})






}