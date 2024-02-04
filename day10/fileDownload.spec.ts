import { expect, test } from "@playwright/test";
import path from "path";

/**
 * 1. Listening the download event
 * 2. Triggering the download
 * 3. Capturing the download object
 * 4. Controlling the download
 */



test("Test to download a file", async({page})=>{

    await page.goto("https://leafground.com/file.xhtml");
    //Create a promise to wait for the event called download
    const fileDownloadPromise = page.waitForEvent('download');
    await page.getByRole('button', {name:'Download'}).click();
    //Promise is resolved
    const fileDownloader = await fileDownloadPromise;

    await fileDownloader.saveAs(path.join("downloads/"+fileDownloader.suggestedFilename()));


    const downloadUrl = fileDownloader.url();
    console.log(`The file is being downloaded from: ${downloadUrl}`);

    await page.waitForTimeout(2000);
    
    
                                                                   
})
