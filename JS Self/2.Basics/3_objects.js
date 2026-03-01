 //singletop (obejct.create in this singleton is Created)
 //object literals

const mySym = Symbol("key1");

 const JsUSer = {
    name : "Deep",
    "full name" : "Deep Kacha", // space in var declaration
    age : 19,
    [mySym]: "My Key1", //for symbol declaration
    isLoggedIn : false,
    loacation : "India",
    email: "deep@google.com",
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
 }
console.log(JsUSer.email) 
console.log(JsUSer['email'])
console.log(JsUSer["full name"])
console.log(typeof [mySym])
console.log(JsUSer [mySym])// To print symbol value

JsUSer.email = "deep@gmail.com"
// Object.freeze(JsUSer) // To make object immutable
JsUSer.email = "deep@yahho.com" // This will not change the email
console.log(JsUSer) // Still prints 

JsUSer.greeting = function() {
    console.log("Hello JS User ");
}

JsUSer.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUSer.greeting()); // Prints the greeting function
console.log(JsUSer.greetingTwo()); // Prints the greeting function with name