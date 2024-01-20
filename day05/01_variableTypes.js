//let variableName: type = value;
var browserVersion = 120.345; //explicit type inference
//const variableName: type = value;
var browserType = 'Chrome'; //Implicit type reference
//TYpe Inference
/***
 * 1. Implicit Type iNference
 * 2. Explicit type Inference
 *
 *
 */
//let isBrowerClosed = true; //Inmplicit
var isBrowerClosed = false; //explicit
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
function add(x, y) {
    return x + y;
}
console.log(add(10, 5));
//let browsers:string[] = ['chrome', 'safari', 'firefox', 'edge']
//let browsers:any[] = ['chrome', 'safari', 'firefox', 'edge', 123, true]
var browser = ['chrome', null];
console.log(browser);
