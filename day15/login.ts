import { Page } from "playwright";

export class LoginPage{

    page: Page

    constructor(page:Page){
        this.page = page;
}

    public async loadApp(url:string){
         await this.page.goto(url);
    }

    public async doLogin(username:string, password:string){
        await this.page.fill("[name='loginfmt']", username);
        await this.page.click("[type='submit']");
        await this.page.fill("[name='passwd']", password);
        await this.page.click("[type='submit']");
        await this.page.click("[type='submit']");

        await this.page.waitForTimeout(10000);
        await this.page.context().storageState({path:"dynamics365.json"});

    }
}