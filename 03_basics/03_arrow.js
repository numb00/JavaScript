const user ={
    username : "sagar",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username ="sag"
// user.welcomeMessage()

// console.log(this);


// function chai (){
//     let username = "sagar"
//     console.log(this.username);
// }

// const chai = function (){
//     let username = "sgaar"
//     console.log(this.username);
// }


const chai = () => {
    let username = "sgaar"
    console.log(this);
}


// chai()

// const addTwo=(num1 , num2) => {
//     return num1 + num2
// }


// const addTwo = (num1 , num2) => num1 + num2
// const addTwo = (num1 , num2) => (num1 + num2)
const addTwo = (num1 , num2) => ({username: "sagar"})
console.log(addTwo(3,4));


// const myArray = [2,5,6,7,9]
// myArray.forEach()