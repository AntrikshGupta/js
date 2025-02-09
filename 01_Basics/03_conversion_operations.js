let score = "33"

console.log(typeof score);

let valueInNumber = Number(score)

console.log(typeof(valueInNumber));

console.log(valueInNumber);

let score1="33abc"

let valueInNumber1 = Number(score1)

console.log(typeof(valueInNumber1));

console.log(valueInNumber1);

/*      score -> valueInNumber
        33 -> 33
        "33" -> 33
        "33abc"/"world" -> NaN
        true/false -> 1/0
        undefined -> undefined
        null -> 0
*/

let isLoggedIn = 1
let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(boolIsLoggedIn);

/*
    1 -> true
    0 -> false
    "" -> false
    "world" -> true

*/

// ____________________________________________OPERATIONS____________________________________________ //



let value = 5
let negValue = -value
console.log(negValue);

let str1= "Hello"
let str2= "World"

let str3 = str1 + str2
console.log(str3);

console.log(1 + 1)
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 3);
console.log(2 + 3 + "4");

console.log( 3 + 4 * 5 % 6);

console.log(3 + (4*5) % 6);
console.log((3 + 4)* 5 % 6);

console.log(true);
console.log(+true);
console.log(+"");


let n1 , n2 , n3
n1 = n2 = n3 = 9 + 7
console.log(n1 , n2 , n3 , n1 + n2 + n3);


let x = 5
++x
console.log(x);

x++
console.log(x);
console.log(++x);
console.log(x++);
















