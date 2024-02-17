import { BaseTest } from "./08-baseTest";

class LaunchApp extends BaseTest{

    async checkTitle(url:string, expectedTitle:string){
            if(!this.page) throw new Error('Page is not initialized');
            await this.page.goto(url);
            const title = await this.page.title();
            console.assert(title===expectedTitle, `Expected Title to be '${expectedTitle}', but found
                            '${title}'`)

    }
}

async function runTest(){

    const test = new LaunchApp();

    try{
        await test.setup();
        await test.checkTitle("http://leaftaps.com/opentaps/control/main", "Leaftaps - TestLeaf Automation Platform");
        console.log('Test passed');  

    } 
    catch(error){
        console.log('Test failed', error);
    }
   finally {
        await test.teardown();     
    }
}

runTest();