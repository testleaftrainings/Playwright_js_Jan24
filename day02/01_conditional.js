/**
 * if else, if elseif, switch case
 * 
 * used to perform different actions based on different conditions
 * 
 * Syntax -if
 * if(condition){
 * //code to execute
 * }
 * 
 * Syntax for if else
 * 
 * if(condition){
 * // execute the code //condition is true
 * }else{
 *  //code to execute //condition is false
 * 
 * }
 * 
 * Syntax - if elseif
 *  if(condition1){ //condition1 is true
 *  // execute the code
 * } else if(condition2){   //condition2 is true
 * // execute the code
 * }else{   //condition1 and condition2 are false
 *  //code to execute
 * }
 * 
 * 
 */

function getBrowser(){

    if (browserName==='chrome') {

        return "I'm Chrome";

    }else {

        return "No browser"

    } 
}
let browserName = "chrome"
console.log(getBrowser());  

//if-else-f
function getBrowserVersion(){

    if (browser==='chrome') {

        return "120.23.765";

    }else if(browser === 'firefox'){

        return "119.45.21"

    } else if(browser === 'edge'){

        return "117.11.123"
    }else {
        return "Unsupported browser";
    }

}
let browser = 'chrome' ;
console.log(getBrowserVersion());

/**
 * switch case --> alternative to if-else-if block
 * when there are multiple conditions 
 * 
 * switch(expression){
 *  
 *      case x:
 *          //code block
 *      break;  //terminates that particular
 *      case y:
 *          //code block
 *      break;
 *      default:
 *          //code block
 * 
 * }
 * 
 */

browser = 'safari';
let version = getBrowserVersionOptimized();
console.log(version);

function getBrowserVersionOptimized(){
   
    switch (browser) {
        case "chrome":
            return "120.78.12"
           
        case "firefox":
            return "119.67.11"
        
        case "edge":
            return "117.23.45"

        default:
            return "Unsupported browser";
    }


}


