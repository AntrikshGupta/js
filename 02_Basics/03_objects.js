//singleton object....only one of its kind in the code

//object literals
const mySym = Symbol("MySYMBOL")

const jsUser = {
    name: "Antriksh",
    age: 25,
    mySym:"MySYMB",         //this will create a mySym but as a string datatype
    [mySym]:"MySYMB",
    location: "Indore",
    email: "antriksh@microsoft.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(jsUser.location)

// //other method
// console.log(jsUser["age"]);

// console.log(jsUser.mySym);
// console.log(jsUser[mySym]);
// console.log(typeof [mySym]);

// jsUser.email="antriksh@amazon.com"
// Object.freeze(jsUser)
// jsUser.email="antriksh.google.com"
// console.log(jsUser);

jsUser.greetings = function(){
    console.log("Hello JS User");
    
};
jsUser.greetingsTwo = function(){
    console.log(`Hello JS User, ${this.name}`);       //String Interpolation

    
};
// console.log(jsUser.greetings());
// console.log(jsUser.greetingsTwo());
jsUser.greetings()
jsUser.greetingsTwo()








