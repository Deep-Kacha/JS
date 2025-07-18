const accountId = 1453
let accountEmail = "deep@gmail.com"
var accountPassword = "12345"
accountCity = "Rajkot"
let accountState;
// accountId = 2 // is not allowed
// console.log(accountId);

accountEmail = "dk@22.com"
accountPassword = "123456"
accountCity = "atkot"

console.log(accountId);
/*
not use a var 
- beacsuse of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])