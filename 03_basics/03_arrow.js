/***************************** " this " function **************************/

// 'this' keyword refers current context or current values in the scope.

// 'this' function in object
const user = {
    username: "sanchita",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);    // output below
    }
}  
/* 
sanchita, welcome to website
{
  username: 'sanchita',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
sam, welcome to website
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/

user.welcomeMessage()          // sanchita, welcome to website
user.username = "sam"
user.welcomeMessage()          // sam, welcome to website


console.log(this);            // {}   // here current context is empty in the global scope.

/*******
'this' keyword refers an empty object in the node environment.
'this' keyword refers a window object in the browser environment.   // In the brpwser global object is a window object
******/


// 'this' function in function
/*
function any(){
    let username = "anyone"
    console.log(this.username)
}

any()     // undefined


const any = function () {
    let username = "anyone"
    console.log(this.username)
}

any()       // undefined


const any = () => {
    let username = "anyone"
    console.log(this.username)
}

any()         // undefined     // (this) -> {}
*/



/************************ " arrow " function ************************/

/*
const addTwo = (num1, num2)  => {
    return num1 + num2
}
*/

//const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(3, 4));        // 7