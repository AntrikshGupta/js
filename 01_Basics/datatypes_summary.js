/*
        PRIMITIVE(call by value)

        String, Number, Boolean, Null, Undefined, Symbol, BigInt

        REFERENCE TYPE/ NON PRIMITIVE(call by Reference) 

        Arrays, Objects, Functions

*/

const score = 100
const score1 = 100.3 

const isLoggedIn = true
const outsideTemp = null

let usermail;

const id = Symbol("123")

const id1 = Symbol("123")

console.log(id === id1);

const OG_Avengers = ["Captain", "IronMan", "Thor", "Hulk", "Black Widow", "Hawkeye"]            //      ARRAYS

let obj = {
        name : "Antriksh",
        age : 27
}

const myFunc = function()
{
        console.log("Hello from Java Scripts World");
        
}

console.log(OG_Avengers);

console.log(obj);

myFunc()



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//      Stack ( Used by Primitive data types)  , Heap (Used by Non Primitive Data Type)

let myName = "antrikshgupta"

anotherName= myName

console.log(anotherName);

anotherName = "lytspd"

console.log(myName);
console.log(anotherName);

let userOne ={
        mail : "user@google.com",
        upi: "uaer@ybl"
}

let userTwo = userOne

userTwo.mail="antriksh@google.com"

console.log(userOne);
console.log(userTwo);







