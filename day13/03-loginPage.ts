import { Page, chromium } from "playwright";

class LoginPage{

    //properties
    page: Page

    constructor(page:Page){
        this.page = page;
    
    }
    //methods
    async navigate(){

        await this.page.goto("http://leaftaps.com/opentaps/control/main");

    }

    async login(username:string, password:string){

        await this.page.fill('#username', username);
        await this.page.fill('#password', password);
        await this.page.click('.decorativeSubmit');

    }
}
async function runTestUser1(){
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    const loginPageUser1 = new LoginPage(page);
    await loginPageUser1.navigate();
    await loginPageUser1.login('Demosalesmanager', 'crmsfa');
    await browser.close();
    

}
runTestUser1();
async function runTestUser2(){
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    const loginPageUser2 = new LoginPage(page);
    await loginPageUser2.navigate();
    await loginPageUser2.login('DemoCSR', 'crmsfa');
    await browser.close();
}
runTestUser2();
/**
 * 1. Create a DashboardPage class with:
         A Page object to interact with the browser.
         A url string to store the URL of the dashboard.
2. The class should include:
         A constructor that initializes the Page object and  the URL.
         An asynchronous navigate method to visit the url.
         An async resolutionCenter(
            - Enter the values for the fields email, message
            - Click Send button
         )
3. Test Execution:
         Write an async function dashboardTest to:
         Launch a browser using Playwright's chromium module (non-headless mode).
         Open a new page.
         Create an instance of DashboardPage, passing the new page and the URL 'https://leafground.com/' to the constructor.
        Call the navigate method of the DashboardPage instance.
    
 */