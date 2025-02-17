const accountId = 144357   // use 'const' for constant declaration
let accountEmail = "sanchita@gmail.com"  // use 'let' for variable declaration
var accountPassword = "1236674"  
accountCity = "Bankura"
let accountState;

//accountId = 2   //not allowed for a constant

accountEmail = "sancy@gmail.com"
accountPassword = "3459672"
accountCity = "Kolkata"

console.log(accountId);

/*
prefer not to use var.
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);