// var c = 300
// let a = 300
// if(true){
//     let a =10
//     const b =20
//     console.log("INNER:",a)
// }
// for (let i=0; i < array.length; i++){
//     const element = array[i];
// }
// []
// console.log(a);
// console.log(b);
// console.log(c);


// Nested Scope 
// function one(){
    // const username  = "sagar"

    // function two (){
        // const website = "youtube"
        // console.log(username);
    // }

    // console.log(website);
    // two()
// }


// one()

if (true){
    const username = "sagar"
    if(username === "sagar"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);




// +++++++++++++++++++++++++++++  intresting +++++++++++++++++++++++


addone(5)
console.log(addone(5));
function addone(num){
    return num + 1
}


console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}
addTwo(5)