/**
 * Array - used to store a collection of data/elements
 * 
 * Heterogeneous - arrays in JS can hold elements of different data types
 * size - can either shrink or increase in size
 * 
 * Array index starts with 0
 * Array length starts from 1
 * 
 */

let numbers = []
console.log(numbers.length);

let browserNames = ['chrome', 'firefox', 'safari'];
console.log(browserNames[0]);
console.log(browserNames[10]); //it will say it is undefined - no array index oob exception

browserNames[3] = 'edge'
console.log(browserNames);

browserNames[9] = 'opera';
console.log(browserNames);
console.log(browserNames.length);
console.log(browserNames[5]);

//Heterogeneous
const mixedArray = [1,2,3,'chrome',5,'$Qeagle5',['sanity', 'smoke'], true]
console.log(mixedArray[3]);

//join  Array to string and it will be joined by '-'
const joinedBrowsers = browserNames.join("-");
console.log(joinedBrowsers);

//push --> Adds the element to the end of the array
let courseNames = ['Selenium', 'RPA', 'DevOps'];
courseNames.push("Playwright");
console.log(courseNames);

//pop() --> Removes the last element from the array

courseNames.pop();
console.log(courseNames);

//unshift() --> adds the element to the beginning of the array
courseNames.unshift("Playwright");
console.log(courseNames);

//shift() --> removes the first element from the array

courseNames.shift();
console.log(courseNames);

//concat()--> merges two array into a new array

let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,10];
let mergedArray = array1.concat(array2);
console.log(mergedArray);

//Sorting
let nums = [2,4,7,3,1,8]
nums.sort();
console.log(nums);

////Spread syntax

const arr1 = ['a','b','c','d'];
const arr2 = [...arr1, 'x','y','z']
console.log(arr2);
