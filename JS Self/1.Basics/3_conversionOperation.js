let score = 33
let score1 = "33"
let score2 = "33abc"
let score3 = null
let score4 = undefined

console.log(typeof score)
console.log(typeof (score1))

let valueInNumber = Number (score)
let valueInNumber1 = Number (score2)
let valueInNumber2 = Number (score3)
let valueInNumber3 = Number (score4)

console.log(typeof score)
console.log(typeof score2)
console.log(valueInNumber1)
console.log(valueInNumber2)
console.log(valueInNumber3)

/*
"33" = 33
"33abc" = NaN
true = 1; false = 0
*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean (isLoggedIn)
console.log(booleanIsLoggedIn);

/*
1 = true; 0 = false
"" = fasle 
"Deep" = true
 */

let someNum = 33

let stringNum = String(someNum)
console.log (stringNum) 
console.log (typeof stringNum) 