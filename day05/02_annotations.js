//Union
//let varName: type = value
var value = "TypeScript";
value = 10.5;
//function funcName(parameter:type)
function invokeBrowser(browserName) {
    if (browserName === 'Chrome') {
        console.log("Launch Chrome Browser");
    }
    else {
        console.log("Launch Firefox");
    }
}
invokeBrowser("Chrome");
//let team: Employee & Department ={ id: 1003, empName:"HemaKarthick", department: "QA"}
var team = { id: 1003, empName: "HemaKarthick", department: "QA" };
console.log(team);
