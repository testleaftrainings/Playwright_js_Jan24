import { BaseTest } from "./07-inheritance-baseTest";

class LaunchApp extends BaseTest{

    async checkTitle(url:string, expectedTitle:string){
            await this.page.goto(url);
            const title = await this.page.title();
            console.assert(title===expectedTitle, `Expected Title to be '${expectedTitle}', but found
                            '${title}'`)

    }
}
async function runTest(){
    const test = new LaunchApp();
    await test.setup();
    await test.checkTitle("http://leaftaps.com/opentaps/control/main", "Leaftaps - TestLeaf Automation Platform");
    await test.teardown();
}
runTest();