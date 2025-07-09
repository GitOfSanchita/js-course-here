// if
const isUserloggedIn = true

/*
if( 2 == "2") {
    console.log("executed");
}     // executed
*/

if( 2 === "2") {
    console.log("executed");
} else{
    console.log("not executed");
}       // not executed     // "===" (strict equal)  ->   used for type checking


const temperature = 41

if( temperature === 40 ){
    console.log("equal to 40");  
} else{
console.log("temperature is greater than 40");
}
console.log("Execute");     
// temperature is greater than 40      // Execute


// block scope
const score = 200
if (score > 100){
    const power = "fly"
    console.log(`User power: ${power}`);
}         // User power: fly

//console.log(`User power: ${power}`);     // ReferenceError: power is not defined   


const balance = 1000

//if(balance > 500) console.log("test"), console.log("test2");

if(balance < 500){
    console.log("less than 500");  
} else if(balance < 900){
    console.log("less than 900");
} else {
    console.log("less than 1200");
}       // less than 1200


const userloggedIn = true     // flag
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userloggedIn && debitCard){
    console.log("Allow to buy course");
}       // Allow to buy course

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}       // User logged in