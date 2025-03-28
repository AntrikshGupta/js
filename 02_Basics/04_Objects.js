// const tinderUser = new Object()              //SINGLETON OBJECT

const tinderUser = {}                           //Not a singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "somebody@something.com",
    fullname: {
        designation: "Mr.",
        userfullname: {
            firstname: "Hello",
            middlename: "Beautiful",
            lastname: "World"
        }
    }
}
// console.log(regularUser.fullname.userfullname.middlename);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}

const ob = {
    5: "c",
    6: "d"
}
const checkObj = {
    5: "CHECK",
    7: "Not Checked",
    4: "Overwritten??"
}

// const obj3 = {obj1, obj2}
// console.log(obj3);

// const obj3 = Object.assign({},checkObj,obj1,obj2, ob)
// console.log(obj3);

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLogged"));

const course = {
    courseName: "JS chai aur code",
    coursePrice: 999,
    courseInstructor: "Antriksh"
}
// const {courseInstructor}=course                  //Destructuring 
const {courseInstructor : inst} = course            //Destructuring + pseudoname / alias(inst)
console.log(inst);









