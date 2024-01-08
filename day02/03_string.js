
/**
 * string - data type used to hold a sequence of characters
 * 
 * 
 */

// let browserName = 'chrome';
let browser = "chrome"      //primitive or string literal
browser = "safari"
let browserName = new String("chrome")  //String object
browserName = new String("safari")

//single quote & double quotes

let testType = 'I\'m a smoke test';
let sentence = "Hello, This is a \"\" double quote";

//Concatenation
let testcaseName = "Create a new lead";
let testcaseId = 110;
const result = testcaseId + " - " +testcaseName+ " : passed in last execution";
console.log(result);
console.log(typeof result);

//Bacticks `  template literal --> ES6 in 2015
let testcaseCount = 900;

let output = `There are ${testcaseCount} tests automated in our project`;
console.log(output);

//How do we get the count of character in the string
// length --> property --> const
// method -.> method() --> execute and find a value

let courseName = 'Playwright';
console.log(courseName.length);

// length starts with 1
// index starts with 0 
// P - 0, l - 1, a -2,...

//find the first character  of the given string
console.log(courseName.charAt(0));
console.log(courseName.charAt(courseName.length-1));

//courseName ="DSA";
//index --> 0 D- 0, S - 1, A - 2
//length--> 1 D- 1, S - 2, A - 3  3-1 =2

console.log(courseName.charAt(courseName.length-1));

//index of the character
const randomIndex = courseName.indexOf('S');
console.log(randomIndex);
const noMatch = courseName.indexOf('s');
console.log(noMatch); //-1

//substring --> includes
console.log(courseName.includes('wrig'));
console.log(courseName.includes('th'));

// lowercase, uppercase
console.log(courseName.toLowerCase());
console.log(courseName.toUpperCase());

//slice 
let resultDesc = "The price of the bag is 272 USD";
console.log(resultDesc.length);
console.log(resultDesc.slice(20,27));

// Reversing the string
//companyName = Qeagle --> O/p: elgaeQ

function reverseStr(str){
    let chars = str.split(""); // Q,e,a,g,l,e
    let reversed = "";
    for (let index = chars.length-1; index >= 0; index--) {
       
        reversed = reversed + chars[index];
        
    }
    return reversed;
}
console.log(reverseStr("Qeagle"));

