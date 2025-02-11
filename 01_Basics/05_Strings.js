const name  = "Antriksh "
const repoCount = 2

console.log(name+repoCount+" value");
console.log(`Hello my name is ${name}, My repo count is ${repoCount}`);

const gameName = new String("Antriksh")
console.log(gameName);

console.log(gameName[2]);
console.log(gameName.charAt(0));

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf("r"));

const newGame = gameName.substring(0,3)
console.log(newGame);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);
// console.log(anotherString);

const newString = "    Antriksh    "
console.log(newString.trim());

const url = "https://www.wikipedia.com/wikipedia%20is%20lit"
console.log(url.replace("%20","-"));
console.log(url.replaceAll("%20","-"));
console.log(url.includes("www"))


const stringSplit = "My-name-is-Antriksh-Gupta"
console.log(stringSplit.split("-"));






