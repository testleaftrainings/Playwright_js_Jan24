//let variableName: type = value;

let browserVersion: number = 120.345; //explicit type inference

//const variableName: type = value;
let browserType = 'Chrome'; //Implicit type reference

//TYpe Inference
/***
 * 1. Implicit Type iNference
 * 2. Explicit type Inference
 * 
 * 
 */

//let isBrowerClosed = true; //Inmplicit
let isBrowerClosed: boolean = false; //explicit

//Functions
/***
 * function functionName(){
 * 
 * function body
 * 
 * }
 * 
 * 
 */

function add(x:number,y:number):number{
    return x+y;

}
console.log(add(10,5));

//let browsers:string[] = ['chrome', 'safari', 'firefox', 'edge']

//let browsers:any[] = ['chrome', 'safari', 'firefox', 'edge', 123, true]

let browser = ['chrome', null];
console.log(browser);
