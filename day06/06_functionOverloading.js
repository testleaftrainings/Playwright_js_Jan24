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
//Funcion implementation
function userProfile(value) {
    if (typeof value === 'string') {
        return "Hello, ".concat(value);
    }
    return "Age:".concat(value);
}
//Calling the function
var firstName = userProfile("Shripathi");
var age = userProfile(28);
console.log(firstName);
console.log(age);
