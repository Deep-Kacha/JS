//=========================NUMS=========================
const score = 400
console.log(score) // 400;
console.log(typeof(score)) // number

const balance = new Number(500)
console.log(balance) // Number object;
console.log(typeof(balance))
console.log(balance.toString()) // "500"

const otrherNumber = 125.6544
console.log(otrherNumber.toFixed(2)) // "25.65"
console.log(otrherNumber.toPrecision(3)) // "25.7"

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) // "10,00,000"
console.log("===========================================================");

//=========================MATHS=========================
console.log(Math)

const pi = Math.PI
// console.log(pi) // 3.141592653589793
// console.log(Math.abs(-5)) // 5
// console.log(Math.round(5.1)) // 5;
// console.log(Math.ceil(5.1)) // 6;
// console.log(Math.floor(5.1)) // 5;
// console.log(Math.min(5, 10, 15)) // 5
// console.log(Math.max(5, 10, 15)) // 15;

// console.log(Math.random()) // Random number between 0 and 1
// console.log(Math.floor(Math.random() * 100)) // Random number between 0 and 99
// console.log(Math.floor(Math.random() * 100) + 1) // Random number between 1 and 100

const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // Random number between 10 and 20