/**
 * 
 * Callback --> function that is passed into another function as an argument
 * 
 * function( arg1, )
 * test('title', async()=>{
 * 
 * })
 *
 * 
 * 
 */

//Step 1: Define the callback function

function displayResult(result: number) {
    console.log(`The result is: ${result}`);
    
}

//Step 2: Define the function that uses the callback

function addNumbers(a: number, b: number, callback:(res:number) => void ){
        const sum = a + b;
        callback(sum);

}

//Step:3 Call the function with the callback
addNumbers(10, 20, displayResult);

//addNumbers(10, 20, displayResult: void)

/**
 * function(a, function(b)){
 *      function1(b, function(c))
 * }
 * 
 * 
 * 
 * 
 */