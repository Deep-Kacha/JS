const name ="Deep-Kacha-RKU"
const age = 19

// console.log(name + age +" Value") // string
console.log(`My name is ${name} and my age is ${age}`) // template string

const gameName = new String("Cricket")
console.log(gameName) // String object

console.log(gameName[0]) // object
console.log(gameName.__proto__) // 7

console.log(gameName.length) // 7;
console.log(gameName.toLocaleUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)
console.log(newString) // Crick;

const anotherString = gameName.slice(-6,4)
console.log(anotherString) // ric;

const newString2 = "    Deepak      "
console.log(newString2) // 14
console.log(newString2.trim()) // Deepak
console.log(newString2.trimStart()) // Deepak   


const url = "https://www.google.com"
console.log(url.replace("https://", "http://")) // http://www.google.com;

console.log(url.includes("google")) // true;
console.log(url.includes("deep")) // true;

console.log(name.split("-")) // [ 'Deep', 'Kacha', 'RKU' ];
console.log(name.split("-").join(" ")) // Deep Kacha RKU;