// javascript is a dynamically typed language.


//  There are two types of datatype - primitive and non-primitive.

//  primitive -    7 types : String, Number, Boolean, null, undefined, Symbol, BigInt.

const score = 100
const scoreValue = 100.3   // number value

const isLoggedIn = false   // boolean value
const outsideTemp = null   // null value
let userEmail;     // undefined value

const id = Symbol('123')
const anotherId = Symbol('123')  // Symbol value
console.log(id === anotherId);

const BigNumber = 123455678899876554433n  // BigInt


// Non-primitive (Reference type datatypes) -   3 types : Array, Objects, Functions.

const heros = ["shaktiman", "naagraj", "doga"];   // "[]" -> array 
let myObj = {
    name: "sanchita",       //  "{}" -> object 
    age: 22,
}

const myFunction = function(){   // "function()" -> function
    console.log("Hello World");
}

console.log(typeof BigNumber);  // calculating type of the variables or the datatypes
/* 
  Return type of all the datatypes or variables in javascript...

     1. Primitive Datatypes - 
          Number => number
          String => string
          Boolean => boolean
          null => object
          undefined => undefined
          Symbol => symbol
          BigInt => bigint

     2. Non-primitive Datatypes -
          Arrays => object
          Function => (object) function 
          Object => object
     
*/


// ***********************************************************************

/*  There are two types of memory in javascript - Stack memory and Heap memory.
        1. Primitive datatypes are stored in the Stack memory.
        2. Non-primitive or Reference datatypes are stored in the Heap memory.
*/

// Stack memory example:
let myGithubName = "sanchitalakshman.com"

let anotherName = myGithubName
anotherName = "something.com"

console.log(myGithubName);
console.log(anotherName);

// Heap memory example:
let userOne = {
    email: "userone@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "usertwo@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);