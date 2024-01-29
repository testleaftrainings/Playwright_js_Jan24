/**
 * Auto-waits
 * 
 * Actionability check
 * To click a web element, 
 * before performing the action
 * 1. Visble on the web page
 * 2. Stable
 * 3. receives events - checks any other web elements overlay above that element 
 * 4. Enabled
 * 5. Editable
 * 
 * 
 * 
 */
import { test, expect } from "@playwright/test";

test('Assert a text box', async({page})=>{

    page.goto("https://leafground.com/waits.xhtml");
    /**
     * Multiple occurrances of locators
     * first()
     * last()
     * nth()
     * filter()
     * 
     * 
     * Locator chaining
     */
    const cardToSelect = page.locator(".card").filter({hasText:"Wait for Visibility"});
    const buttonToClick = cardToSelect.getByRole("button").filter({hasText:"Click"});

    await buttonToClick.click();
    const hiddenButton = cardToSelect.getByRole("button").filter({hasText:"I am here"});
    await expect(hiddenButton).toBeVisible({timeout:10000});





})

