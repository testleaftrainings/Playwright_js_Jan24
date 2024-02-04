/**
 * CSV - Comma Separated Values
 * plain text file
 * 
 * 1. Simple format
 * 2. Easy to read
 * 3. Flexibility
 * 
 * 
 */
import { test } from "@playwright/test";
import { parse } from 'csv-parse/sync';
import fs from "fs";
import path from "path";


const records = parse(fs.readFileSync(path.join(__dirname,'loginData.csv')),{
    columns: true,
    skip_empty_lines: true

})
//for('each val' of 'array')

for(const record of records){
test(`Login Test from ${record.test_case}`, async({page})=>{

    await page.goto("https://login.salesforce.com/");
    await page.fill("#username", record.username)
    await page.fill("#password", record.password);
    await page.click("#Login");

})
}

