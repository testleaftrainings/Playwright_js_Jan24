/**
 * for, while, do while
 * 
 *  print --> 5 --> 10 times
 * used to execute a block of code repeatedly, as long as a specied condition is true
 * 
 * Syntax -  for loop
 * 
 * runs a block of code a specific number of times
 * 
 * for(initialization; condition; increment){
 * 
 *  //code block
 *         //incremented
 * }
 * 
 * 
 */

//Print the numbers 1 to 5

for (let index = 1; index <= 5 ; index++) { //index++ =>  index+1
 
    console.log(index);
    
}

/**
 * while --> executes the block as long as a specified condition is true
 * 
 * Syntax
 * 
 * while(condition){
 * //code to be executed
 * 
 * }
 * 
 */

let bRaining = false;

while(!bRaining){

    console.log("keep running");
}

/**
 * do..while --> executes a block of code once, and then repeats the loop as long as a specified 
 * condition becomes true
 * 
 * Syntax
 * do{
 * 
 * // code block
 * 
 * }while(condition)
 * 
 * 
 * 
 * 
 */

let bRainfall = true;

do{
    console.log("Keep walking");

}while(bRainfall)