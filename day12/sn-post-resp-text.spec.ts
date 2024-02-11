import { chromium, expect, test } from "@playwright/test";

test('Test to check Servicenow APIs', async ({request}) => {

    //Without using request fixture
    // const browser = await chromium.launch();
    // const browserContext = await browser.newContext();
    // const apiRequestContext = browserContext.request;
    // const  page = await browserContext.newPage();
    // const apiPageRequest = page.request;
    
    //To create a new incident
    const response = await request.post("https://dev189559.service-now.com/api/now/table/incident",

    {
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Basic YWRtaW46QUw9cStSRmw2bDll"
        },
        data:{
            "short_description": "Created using Playwright"
        }
    });

    //To get the response body
    const responseBody = await response.text();
    console.log(responseBody);
    const parsedJSON = JSON.parse(responseBody);
    console.log(parsedJSON);
    

})

test('Test to measure response time', async ({request}) => {
    const startTime = performance.now();
    //To create a new incident
    const response = await request.post("https://dev189559.service-now.com/api/now/table/incident",

    {
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Basic YWRtaW46QUw9cStSRmw2bDll"
        },
        data:{
            "short_description": "Created using Playwright"
        }
    });

    //To get the response body
    const responseBody = await response.text();
    console.log(responseBody);
    const parsedJSON = JSON.parse(responseBody);
    console.log(parsedJSON);
    
    const endTime = performance.now();
    const responseTime =  endTime - startTime;
    console.log(`Response Time: ${responseTime} ms`);
    expect(responseTime).toBeLessThan(1500);
    

})
