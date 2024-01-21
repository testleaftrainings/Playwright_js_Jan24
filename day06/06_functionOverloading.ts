/**
 * Function Overloding
 * 
 * multiple functions with the same name but with different parameters 
 * 
 * 1 apple inside the magic box -> juice
 * 2 apples --> pie
 * 
 * 
 * function make
 * make(apple) --> juice
 * make(apple, apple) --> pie
 * 
 * Multiple signatures --> declarations
 * single implementation 
 * 
 */

//Overload signatures

function userProfile(name: string): string;
function userProfile(age: number): string;

//Funcion implementation
function userProfile(value: string | number): string{
        if(typeof value ==='string'){
            return `Hello, ${value}`;
        }
        return `Age:${value}`;
      

}

//Calling the function
let firstName = userProfile("Shripathi");
let age = userProfile(28);

console.log(firstName);
console.log(age);



