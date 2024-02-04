import { expect, test } from "@playwright/test";
import path from "path";

/**
 * Scenario input[type='file'] --> Choose button will be present
 *      setInputFiles
 * 
 * Scenario --> dynamic interactions --> only when you click a button, textbox, link
 * you may have input or you may not have it. You can use the locator present
 *         fileChooser event
 * 
 * 
 */

test("Scenario: 1 using type", async({page})=>{

    await page.goto("https://leafground.com/file.xhtml");
    const card = page.locator(".card").filter({has: page.getByText("Basic Upload")});

    //await page.locator("selector").setInputFiles(files)
    //await page.setInputFiles("selector", files)
    await card.locator("input[type='file']").setInputFiles([path.join(__dirname,'images.jpeg')]);

    //await page.setInputFiles('.browse-button-wrapper', ['path/file1.png', path/file2.mp4])
    await page.waitForTimeout(2000);
    await expect(card.locator(".ui-fileupload-filename")).toContainText("images.jpeg");

    await page.waitForTimeout(5000);
                                                                   
})

test.only("Scenario 2 using event handler", async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload");

    //Creating the promise
    const fileChooserPromise = page.waitForEvent('filechooser',{timeout:10000});
    await page.locator("#drag-drop-upload").click();
    //Promise is getting resolved
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles([path.join(__dirname,'images.jpeg')]);
    await expect(page.locator('#drag-drop-upload')).toHaveClass("dz-success-mark");
    await page.waitForTimeout(5000);
})