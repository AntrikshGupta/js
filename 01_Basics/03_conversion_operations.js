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

