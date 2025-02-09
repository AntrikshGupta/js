"use strict"

console.log("2" > 1);
console.log("02">1);
console.log("">1);
console.log("0" > 1);
console.log("0" >= 1);
console.log("0" <= 1);

console.log(null > 0);          //when comparing null gets converted to 0 but isnt converted to anything in equality check
console.log(null >= 0);
console.log(null == 0);


console.log(undefined > 0);          
console.log(undefined >= 0);
console.log(undefined == 0);
