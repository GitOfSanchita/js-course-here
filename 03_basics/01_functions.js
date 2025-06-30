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


