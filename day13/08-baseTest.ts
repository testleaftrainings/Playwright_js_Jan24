import { chromium, Page, Browser } from "playwright";

export class BaseTest{

    browser:Browser|null = null;
    page:Page|null = null;

    async setup(){

        this.browser = await chromium.launch({headless:false});
        this.page = await this.browser.newPage();

    }

    async teardown(){

        if(this.page){
            await this.page.close();
        }
        if(this.browser){
            await this.browser.close();
        }   
    }
}