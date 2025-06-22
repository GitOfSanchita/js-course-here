 // Numbers in javascript

 const score = 400
 console.log(score);  //400
 
 const balance = new Number(100)  // Object definition
 console.log(balance);   //[Number:100]
 
 console.log(balance.toString().length);  //3   // "toString()" method used for number to string conversion.
 console.log(balance.toFixed(2));  //100.00
 
 const otherNumber = 123.8966
 console.log(otherNumber.toPrecision(3));   //124    //if 23.8966 -> 23.9,   1123.89 -> 1,12c+3
 // "toPrecision()" - Number of significant digits. Must be in the range 1-21, inclusive. Returns a string.
 
 const hundreds = 1000000
 console.log(hundreds.toLocaleString());   //1,000,000 -> US standard
 console.log(hundreds.toLocaleString('en-IN'));   //10,00,000



//**************************************** Maths ******************************************

console.log(Math);  // object [Math] {}
console.log(Math.abs(-4));  //4    // abs (absolute) -> converting (-)ve value into a (+)ve value
console.log(Math.round(4.5));    //5     // 4.2 -> 4,  4.8 -> 5
console.log(Math.ceil(4.2));    //5
console.log(Math.floor(4.9));    //4
console.log(Math.min(4, 3, 6, 8));   //3
console.log(Math.max(4, 3, 6, 8));   //8

console.log(Math.random());    // give a random value in range of 0 to 1
console.log((Math.random()*10) + 1);  
console.log(Math.floor(Math.random()*10) + 1);  // give a lowest round off value

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
