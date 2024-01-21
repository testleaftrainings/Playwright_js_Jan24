let list:number[] = [1, 2, 3, 4, 5];
                //   0  1  2  3  4
console.log(list);

//removes the elements in the array and you can insert new elements to the array
    //splice(index, deleteCount, new element1, new element2 )
list.splice(2, 2, 6, 7);
console.log(list);

let list1:any[] = [1, 2, 3, 4, 5];
console.log(list1);

//removes the elements in the array and you can insert new elements to the array
list1.splice(2, 2, "chrome", "safari");
console.log(list1);

//slice
 let numbers: number[] = [1, 2, 3, 4, 5];
                    //    0, 1  2  3  4

//Output: 2, 3, 4
numbers.slice(1, 4) //starting index, ending index --> before 4

//Output: 3,4,5
numbers.slice(2, numbers.length);

let browserProfile: (number|string)[] =[120, "chrome"]
