// singleton -> made by constructor only, not by literal.
// object.create -> object declaration through constructor.

// object literals

const mySym = Symbol("key1")     // symbol declaration

const jsuser = {
    name: "Sanchita",
    "full name": "Sanchita Lakshman",
    [mySym]: "mykey1",
    age: 22,
    location: "Bankura",
    email: "sanchita@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}          // object declaration.

// typeof age -> number
// typeof isLoggedIn -> boolean
// typeof lastLoginDays -> object
// typeof name, "full name", location, email -> string
// typeof [mySym] -> symbol

console.log(jsuser.email);       // sanchita@google.com
console.log(jsuser["email"]);      // sanchita@google.com
console.log(jsuser["full name"]);     // Sanchita Lakshman
console.log(jsuser[mySym]);        // mykey1

console.log(typeof jsuser[mySym]);     // string ?? ****

jsuser.email = "sanchita@chatgpt.com"     // syntax for changing the values or overwriting the values of an object.
// Object.freeze(jsuser)      // syntax for locking the values of the object.
// jsuser.email = "sanchita@microsoft.com"
console.log(jsuser);
// {name: 'Sanchita', 'full name': 'Sanchita Lakshman', age: 22, location: 'Bankura', email: 'sanchita@chatgpt.com', isLoggedIn: false, lastLoginDays: [ 'Monday', 'Saturday' ], [Symbol(key1)]: 'mykey1'}


jsuser.greeting = function(){
    console.log("Hello JS user");
}    // adding 'greeting' function within jsuser object

jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}  // referenceing the 'name' of the object.

console.log(jsuser.greeting);    // [Function (anonymous)] -> function returns back means function is not executed but its reference is back.
console.log(jsuser.greeting());    // Hello JS user
console.log(jsuser.greetingTwo());