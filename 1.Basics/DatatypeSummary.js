// Primitive - 7 Types (String, NUmber, Bolean, Nul, undefined, Symbol, BigInt)

// Reference (NonPrimitive) - Array, Objects, functions 

const score = 100
const scr1 = 100.3 

const isLoggedIn = false
const outSIdetemp = null
let userEmai;

const id = Symbol('123')
const userID = Symbol('123')

console.log (id === userID)

const bigNumber = 454165161561131321312313131n

console.log(typeof (bigNumber))

const heros = ["shaktiman","nagraj","doga"]
let myObj = {
    name: "Deep",
    age : 19,
}

const myFunction = function(){
    console.log("Deep");
}

console.log(typeof outSIdetemp)
console.log(typeof score)
console.log(typeof myFunction)

console.log(myFunction)


function greet() {
    console.log("Hello, world!");
}

greet()