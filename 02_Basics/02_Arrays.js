const marvel = ["Cap","Ironman","Thor"]
const dc = ["Superman","Batman","Wonder Woman"]

// marvel.push(dc)

// console.log(marvel);

// const heros = marvel.concat(dc)

// console.log(marvel);
// console.log(dc);
// console.log(heros);

//SPREAD METHOD

const assemble = [...marvel,...dc]
// console.log(assemble);



// const another = Array.isArray("Antriksh")       //returns the value whether its an array or not
// console.log(another);

// console.log(Array.from("Antriksh"))             //converts string to Array

// console.log(Array.from([445,543,3453,34553,3453,44]));

// // FLAT method

// const flat_arr=[1,2,3,[4,5],6,7,[8,[9,10,11]]]
// console.log(flat_arr.flat(Infinity));           //Infinity is the depth


let score1 = 100
let score2 = 200
let score3 = 300
const newArr = Array.of(score1,score2,score3)
// console.log(newArr);





