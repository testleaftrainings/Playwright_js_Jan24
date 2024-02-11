import { expect, test } from "@playwright/test";
import { getAccessToken } from "./authHelper";

let accessToken: any;
let instUrl: any;

test(`Use access token in the test from the export function getAccessToken`, async () => {

        const authData = await getAccessToken();
        accessToken  = authData.accessToken;
        instUrl = authData.inst_Url;
 
})

test(`TC001_Create a new Opportunity`, async ({request}) => {
    
    const opportunity = await request.post('https://testleaf30-dev-ed.develop.my.salesforce.com/services/data/v59.0/sobjects/Opportunity',
    {
        headers:{
            "Authorization": "Bearer "+accessToken,
            "Connection" : "keep-alive"
        },
        data:{
            "Name":"Created From Playwright",
            "StageName":"Qualification",
            "CloseDate":"2023-12-07"
        }
    })
    const opp_response = await opportunity.json();
    console.log(opp_response);   
    console.log(`Status code is ${opportunity.status()}`);
    expect(opportunity.statusText()).toBe("Created");
    
    
})
test(`TC002 Update the created opportunity`, async ({request}) => {
    
    const update = await request.patch('https://testleaf30-dev-ed.develop.my.salesforce.com/services/data/v59.0/sobjects/Opportunity/0065j00001Rz9wDAAR',
    {
        headers:{
            "Authorization": "Bearer "+accessToken,
            "Connection" : "keep-alive"
        },
        data:{
            "Amount": "75000",
            "Type": "Existing Customer - Upgrade"
        }
    })
    
    console.log(`Status code is ${update.status()}`);
    expect(update.statusText()).toBe("No Content");
    
    
})

test(`TC003 Get the updated record`, async ({request}) => {
    
    const updatedField = await request.get('https://testleaf30-dev-ed.develop.my.salesforce.com/services/data/v59.0/sobjects/Opportunity/0065j00001Rz9wDAAR',
    {
        headers:{
            "Authorization": "Bearer "+accessToken,
            "Connection" : "keep-alive"
        },
       
    })
    const opp_response = await updatedField.json();
    console.log(opp_response);

    console.log(`Status code is ${updatedField.status()}`);
  
    
    
})