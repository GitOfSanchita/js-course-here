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

