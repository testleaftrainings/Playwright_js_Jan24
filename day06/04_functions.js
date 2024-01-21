/**
 * Function - a set of statements that performs a specific task
 *
 * optionally return a value
 *
 * zero parameters, n number of parameters
 *
 * Syntax: function functionName(parameters): returnType{
 *
 *      //Function body
 * }
 *
 */
function add(a, b) {
    return a + b;
}
//Calling the function
var sum = add(10, 5);
console.log(sum);
/**
 * Types of functions
 *
 * 1. Named functions - regular functions with a name // function functionName
 *
 * 2. Anonymous functions - functions without a name// function()
 *
 * 3. Arrow functions - conscise way for wring functions => // (a,b) => a * b
 *
 *
 */
//Anonymous function
var greeting = function (name) {
    return "Hello, ".concat(name);
};
//Calling a function
var result = greeting("Testleaf");
console.log(result);
//Arrow functions
var addition = function (a, b) { return a + b; };
var greetName = function (name) { return "Hello ".concat(name); };
