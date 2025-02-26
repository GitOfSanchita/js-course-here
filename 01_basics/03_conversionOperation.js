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


/////////////   OPERATIONS   //////////////

let value = 3
let negValue = -value
//console.log(negValue);

console.log(2**3);  //power operation
console.log(2/3);   //devide operation
console.log(2%3);   //Remainder operation

let str1 = "hello"
let str2 = " sanchita"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);
console.log(+"");

let gamecounter = 100
gamecounter++;  // or "++gamecounter"  (prefix & postfix)
console.log(gamecounter);
