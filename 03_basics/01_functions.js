// function definition
function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("C");
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("A"); 
}   

sayMyName(); // sayMyName => reference of function, sayMyName() => execution of function


// adding two numbers
/* function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
   }

addTwoNumbers(3, 5);    // 8  
addTwoNumbers(3, "5");   // 35    // if (3, "a") => 3a
addTwoNumbers(3, null);   // 3   
*/

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}  // it saves some space in the memory

const result = addTwoNumbers(3, 5)
console.log("Result: ", result);    // 8

// ********(number1, number2) => parameters,  (3, 5) => arguments ********


function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
    // return username
}

console.log(loginUserMessage("Sanchita"));     // Sanchita just logged in
//console.log(loginUserMessage("sanchita"), "just logged in");

console.log(loginUserMessage());   //************ undefined just logged in *************
/* Please enter a username
   undefined */ 
// loginUserMessage(username = "sam") => sam just logged in  


function calculateCartPrice(...num1){
    return num1
}    // "..." => rest operator (or spread operator depends on the use case)

console.log(calculateCartPrice(200, 400, 500, 2000));    // [ 200, 400, 500, 2000 ]

//************* Interview important *************
function calculateCartPrice(val1, val2, ...num1){
    return num1
} 

console.log(calculateCartPrice(200, 400, 500, 2000));  // [ 500, 2000 ] => ...num1


//Passing an Object in a function
const user = {
    username: "sanchita",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);   // username is sanchita and price is 199
              //*** or ***
handleObject({
    username: "sam",
    price: 399
})                   // username is sam and price is 399


// Passing an Array in a function
const myNewArray = [300, 400, 100, 700]
function returnValue(getArray){
    return getArray[1]
}
console.log(returnValue(myNewArray));  // 400
             //*** or ***
console.log(returnValue([100, 300, 600, 500]));    // 300