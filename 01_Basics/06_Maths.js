const num = 400
const score = new Number(100)

console.log(score);

console.log(score.toString());
console.log(score.toString().length);

const pie = 3.14857693
console.log(pie.toFixed(2));

const other = new Number(7867.7899)
console.log(other.toPrecision(2));

const trynew = new Number(123.8966)
console.log(trynew.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // By default its American Standard of Numbers 100,000,000 type

// ++++++++++++++++++++++++++++++  MATHS    ++++++++++++++++++++++

console.log(Math.abs(-4.5));

console.log(Math.round(4.3));


console.log(Math.round(4.8));

console.log(Math.ceil(4.2));

console.log(Math.floor(4.2));

console.log(Math.max(3,7,23,78,4,3,5,6,7,533,4,56,788,6));

console.log(Math.min(3,7,23,78,4,3,5,6,7,533,4,56,788,6));

console.log(Math.round(Math.random()*10 + 1));

const max = 20 
const min = 10

// const range = Math.floor(Math.random()*(max-min+1) + min)
//Math.random() -> ( 0 , 1 ) 

console.log(Math.floor(Math.random()*(max-min+1) + min));

