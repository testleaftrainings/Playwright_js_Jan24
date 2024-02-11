import { chromium } from "@playwright/test";

async function getAccessToken(){
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const apiRequestContext = browserContext.request;

    const clientID = "3MVG9pRzvMkjMb6lZlt3YjDQwe0hk0f5ZPyWD38tfPYQ75KXUzZBGzM_c7I0o3yc6ua1IUk6lEQIy4U2sByrg";
    const clientSecret = "79FFF874D54193B377A60354C71CBBE83120AD28A5D6BC536D2F68C94645DE98";
    const username = "ranjini.r@testleaf.com";
    const password = "Testleaf$1234";
    const url = "https://login.salesforce.com/services/oauth2/token";

    const generatingToken = await apiRequestContext.post(url,{

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
    console.log(generatingTokenJSON);
    return{
        accessToken: generatingTokenJSON.access_token,
        inst_Url: generatingTokenJSON.instance_url
    }
      
}
export {getAccessToken};