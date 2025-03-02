const name = "sanchita"
const repoCount = 50

//console.log(name + repoCount + " value");    // outdated syntax version 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // Backticks
// modern way of syntax => String Interpolation

const gameName = new String('javascript-dot-com')
console.log(gameName[0]);      // "0-th" key accessing
console.log(gameName.__proto__);    // prototype extraction

console.log(gameName.length);
console.log(gameName.toUpperCase());     // "()" => methods or functions
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,5)    // storing "substring" method in the "newString" variable
console.log(newString);    

const anotherString = gameName.slice(-15,5) // Negative value can be accepted by only slice method, not by substring.
console.log(anotherString);

const newStringOne = "     lakshman      "
console.log(newStringOne);
console.log(newStringOne.trim());     // "trim()" method removes unwanted spaces.

const url = "https://someone.com/github%20account"
console.log(url.replace('%20', '-'))    //  "Replace()" method is to be used for replace some keyword.

console.log(url.includes('github'));   // this method is to be used for checking if that keyword is included or not.

console.log(gameName.split('-'));     // this method is to be used for spliting the strings.
