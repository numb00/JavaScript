
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
// console.log(logInUserMassage("seg"));


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500,2000));

const user = {
    username:"sagar",
    price:199
}

function handObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handObject(user)
handObject({
    username:"seg",
    price:399
})

const myNewArray = [200, 400, 500, 600]
function returnSecondValue(getArray){
    return  getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 800 ,600 ]));
