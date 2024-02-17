import { Browser } from "./06-interface-Browser";

class OpenChrome implements Browser{
    browserName: string = "Chrome";
    startApp(): void {
        console.log("Launch the browser");
        
    }
    loginCredentials(username: string, password: string): string {

        return username+ " "+ password;
    }
    getStatus(): boolean {

        return true;
        
    }

}
const myChrome = new OpenChrome();
myChrome.startApp();
console.log(myChrome.browserName);
console.log(myChrome.getStatus());
console.log(myChrome.loginCredentials("Demosalesmanager", "crmsfa"));


