// #primitve

// 7 Types  (all are call by value copies data):-String, Number, Bolearn ,Null ,Undefined, Symbol ,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id= Symbol('123')
const anotherId = Symbol('123')
// console.log (id === anotherId);

const bigNumber = 355462616618168682n

// Reference Type(non-primitive)

// Array, Object , Functions

const heros = ["saktiman" , "naaagraj" , "doga"];
let muObj = {
    name:"sagar",
    age:21,
}
const myFucntion = function(){
    console.log("Hello Wolrd");
}
console.log(typeof scoreValue);


// ++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive), Heap (Non-Primitive)
let myYoutubename = "sagar"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

let userOne={
    email :"hello@gmail.com",
    UIP:"user@ybl"
}
let userTwo = userOne

userTwo.email = "sagar@google.com"

console.log(userOne.email);
console.log(userTwo.email);