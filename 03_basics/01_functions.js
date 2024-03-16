
// console.log("S");
// console.log("A");
// console.log("G");
// console.log("A");
// console.log("R");


function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("G");
    console.log("A");
    console.log("R");
}
// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1,number2){

    // let result = number1 + number2 
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3,5)

// console.log("result:",result);

function logInUserMassage(username = "sagar"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return`${username} just logged in`
}
// console.log(logInUserMassage("sagar"));
console.log(logInUserMassage("seg"));
