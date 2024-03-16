// singleton 
// Object.create
// objects literals 


const mySym = Symbol("key1")


const JsUser = {
    name:"sagar",
    "full name":"Sagar Thapa",
    [mySym]:"mykey1",
    age:18,
    location:"Dehradun",
    email:"sagar@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "sgar45@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "Sagar@555microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hellon Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hellon Js Use, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());