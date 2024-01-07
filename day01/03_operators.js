//Operators
/*
Arithmetic Operators
1. Addition  -> +
2. Subtraction -> -
3. Multiplication -> *
4. Division -> / (quotient)
5. Modulus -> % (remainder)

*/

/**
 * Order of preference 
 *  - brackets
 *  - div , mul
 *  - add, sub
 *  - left>>right
 */

let a = 5;
let b = 10;
console.log(a%b);

// ++ - increment operator

let val = 10;
console.log(val++); //val+1
//1. the value is assigned 2. It gets incremented
console.log(val);
//Pre increment the value by 1
console.log(++val);
// -- -> decrement operator
let value = 50;
console.log(value--); //50 --> 50-1 =49
//Pre dec --> 49-1 = 48
console.log(--value);

//Strict equality vs non strict
/*

Strict equality --> === 1. comapres the data type 2. compares the values
Non-strict equality --> == 1.only compares the values and not the data type

*/
console.log(1 === 1);
console.log(1 ==='1');
console.log("chrome"==='Chrome');
console.log(true == 'true'); // 1 == true