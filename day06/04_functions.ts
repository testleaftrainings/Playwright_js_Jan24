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

function add(a: number, b: number): number{

            return a+b;

}

//Calling the function
let sum = add(10, 5);
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
let greeting = function(name: string): string{
    return `Hello, ${name}`
}

//Calling a function

let result = greeting("Testleaf"); 
console.log(result);


//Arrow functions

// let addition = (a: number, b:number): number => a + b;

// let greetName = (name: string): string => `Hello ${name}`;

// Arrow function with function block

let greet = (name:string): string =>{
    let greeting = `Hello ${name}`;
    return greeting;

}


