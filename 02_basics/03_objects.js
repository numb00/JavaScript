// const tinder = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "samay"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname :{
        userfullname:{
            firstname:"sagar",
            lastname:"Thapa"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a" , 2:"b"}
const obj2={3:"a" , 4:"b"}
const obj4={5:"a" , 6:"b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1 , obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const user = [
    {
        id:1,
        email:"sagar222@gmail.com"
    },
    {
        id:1,
        email:"sagar222@gmail.com"
    },
    {
        id:1,
        email:"sagar222@gmail.com"
    },
]
user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename:"js in hindi",
    prise:"999",
    courseInstructor:"hitesh"
}
// course.courseInstructor
const {courseInstructor:instructor}= course

console.log(instructor);


// react
// const navbar = ({company}) => {

// }
// navbar(company ="sagr")
// 

{
    "name":"sagar",
    "coursename" :"Js in hindi",
    "price" : "free"
}
[
    {},
    {},
    {}
]

