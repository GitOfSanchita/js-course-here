//const userEmail = "sanchita.ai"     // Got user email
//const userEmail = ""               // Do not have user email
const userEmail = []                // Got user email

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Do not have user email");
}              

// falsy values
// false, 0, -0, "", BigInt 0n, null, undefined, NaN  (Not a Number)

// truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}                                  // Array is empty


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}                                  // Object is empty