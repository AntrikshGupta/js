const arr = [0,1,2,3,4,5,6]
const a1 = ["a","b","c"]

const heroes = new Array("Stark","Rogers","Odinson","Banner","Romanoff","Barton")
// console.log(heroes[1]); 

//ARRAY METHODS
// console.log(arr);


arr.push(7)
arr.push(8)

// console.log(arr);

arr.pop()

// console.log(arr);
// console.log(arr.length);


arr.unshift(30) //Shifts the array and puts the value at the start of the array and arr length increases by 1

// console.log(arr);
// console.log(arr.length);

arr.shift()   // Undo Unshift

// console.log(arr);
// console.log(arr.length);


// console.log(arr.includes(9));        false
// console.log(arr.includes(4));        true

// console.log(arr.indexOf(9));         -1
// console.log(arr.indexOf(3));         3

const newArr = arr.join()               //array converted to a comma separated string

// console.log(newArr);                
// console.log(typeof newArr);             //String type

// console.log("A",arr)

const myarr = arr.slice(1,3)
// console.log(myarr);

const myArr = arr.splice(1,3)
// console.log(myArr);
// console.log(arr);

//Slice takes the elements from the first index to the last index-1 and stores them, the original array remains the same
//Splice takes the elements from the first index to the last index and stores them, the original array gets that range elements deleted

