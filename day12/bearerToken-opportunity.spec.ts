import { expect, test } from "@playwright/test";
let accessToken: any;
let instUrl: any
test(`Test to generate Access Token`, async ({request}) => {

    const clientID = "3MVG9pRzvMkjMb6lZlt3YjDQwe0hk0f5ZPyWD38tfPYQ75KXUzZBGzM_c7I0o3yc6ua1IUk6lEQIy4U2sByrg";
    const clientSecret = "79FFF874D54193B377A60354C71CBBE83120AD28A5D6BC536D2F68C94645DE98";
    const username = "ranjini.r@testleaf.com";
    const password = "Testleaf$1234";
    const url = "https://login.salesforce.com/services/oauth2/token";
    
    const generatingToken = await request.post(url,{
        headers:{
            "Content-Type" : "application/x-www-form-urlencoded",
            "Connection" : "keep-alive"
        },

        form:{
            "grant_type": "password",
            "client_id" : clientID,
            "client_secret" : clientSecret,
            "username" : username,
            "password" : password

        }

    });

    const generatingTokenJSON = await generatingToken.json();
   // console.log(generatingTokenJSON);

    accessToken = generatingTokenJSON.access_token;
    console.log(`Access Token is: ${accessToken}`);
    instUrl = generatingTokenJSON.instance_url;
    console.log(`Instance URL: ${instUrl}`);  
    
})

test.skip(`TC001_Create a new Opportunity`, async ({request}) => {
    
    const opportunity = await request.post("https://testleaf30-dev-ed.develop.my.salesforce.com/services/data/v59.0/sobjects/Opportunity",
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
test.skip(`TC002 Update the created opportunity`, async ({request}) => {
    
    const update = await request.patch("https://testleaf30-dev-ed.develop.my.salesforce.com/services/data/v59.0/sobjects/Opportunity/0065j00001Rz9npAAB",
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
    
    const updatedField = await request.get("https://testleaf30-dev-ed.develop.my.salesforce.com/services/data/v59.0/sobjects/Opportunity/0065j00001Rz9npAAB",
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