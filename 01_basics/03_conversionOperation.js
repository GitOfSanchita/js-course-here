let score = "33abc"

console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);    // NaN = Not a Number


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0; undefined => NaN
// "sanchita" => NaN

let isLoggedIn = 1  

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true;  0 => false
// "" => false   
// "something" => true

let someNumber = 45
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
