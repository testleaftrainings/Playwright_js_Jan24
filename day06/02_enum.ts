/*enum TestResult{  
    Pass = 1,
    Fail,
    Skip
 }
 
 function logTestResult(testName: string, result: TestResult){
    console.log(`Test: ${testName}, Result Code: ${result}`);
    
 }

 logTestResult("Login Test", TestResult.Pass);
 logTestResult("Registration Test", TestResult.Fail);
 logTestResult("Update Profile Test", TestResult.Skip);


 //String enums

 enum BrowserType{
    Chrome = "chrome",
    Firefox = "firefox",
    Edge = "ms-edge",
    Safari = "safari"

 }

 function launchBrowser(browserName:BrowserType){

    console.log(`Launching browser: ${browserName}`);

 }

 launchBrowser(BrowserType.Chrome);
 launchBrowser(BrowserType.Firefox) */

 //Heterogeneous enum

 enum BrowserStatus{
    Opened = 1,
    Closed = "Closed",
    Crashed = 0,
    Unknown 
 }

 function reportBrowserStatus(status:BrowserStatus){
    console.log(`Current browser status: ${status}`);
 
 }
    reportBrowserStatus(BrowserStatus.Opened);
    reportBrowserStatus(BrowserStatus.Closed);
    reportBrowserStatus(BrowserStatus.Crashed);
    reportBrowserStatus(BrowserStatus.Unknown);

 