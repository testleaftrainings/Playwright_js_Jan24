// Best practices for variable naming convention
/*
- meaningful names
- a to z, A-Z, 0-9, _ (underscore)
- don't start with numbers or _
- lowerCamelCase for best readability
- var firstNameOfBrowser

*/

// var, let & const
/*

1. Re-assignment
2. Scoping
3. Hoisting


*/
//let - ES6
var firstName = 'Ranjini';
console.log(firstName);

var firstName = "Bowya";
console.log(firstName);

let firstName = "Ajay";
console.log(firstName);

firstName = "Radhakrishnan";
console.log(firstName);

//const --> constant--> value cannot be changed

const age = 27;
console.log(age);
/*
const browser = 'chrome';
browser = 'safari';
console.log(browser);
*/
let companyName = 'Testleaf';
console.log(companyName);
companyName = 467579809;
console.log(companyName);

/*
var - redeclaration is possible 
let - redeclaration is not possible

var & let --> reassignment is possible

const--> you cannot replace or change the value assigned at any point
*/
/*
Variable Scoping --> level of accessibility of the variables

1. Global
variable is declared at the js level and not inside the functions or blocks
2. Function 

3. Block 



*/

let gender = 'female';      //global variable
function print(gender) {
let age = '25';             //function scope variable
if (gender.startsWith('female')){
    let color = 'pink';        //block scope variable
    console.log("She/Her");
}else{

    console.log("He/Him");
}
console.log(color);
 console.log(age);   
}

//To call a fnction
//print(gender);

//Hoisting

// var lastName = 'Qeagle';
// console.log(lastName);

/*console.log(lastName);
let lastName = 'Qeagle';
console.log(lastName);*/

//Internal process - hoisting occurs
// var lastName;
// console.log(lastName);
// lastName = 'Qeagle';

/*console.log(browser);
var browser = 'chrome';
console.log(browser);*/
//var browser;
//console.log(browser)
//browser='chrome

console.log(browser);

var browser = 'chrome';
console.log(browser);

//const browser;
//console.log(browser);