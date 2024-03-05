const name = "sagar"
const repoCout = 50

// console.log(name+ repoCout + "value");
console.log(`hello my name is ${name} and my repo count is ${repoCout}`);

const gameName = new String('sagarhc')
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('g'));

const newString = gameName.substring(0,4)
console.log(newString);
 
const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   Sagar     "
console.log(newStringOne.trim());

const url = "https://sagar.com/dagar%thapa"
url.replace('%20','-')