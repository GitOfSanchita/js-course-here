console.log("2" > 1);   //true  ....... "2" => 2 (conversion)
console.log("02" > 1);   //true

console.log(null == 0);  //false   = equality checked by equality operator
console.log(null > 0);   //false
console.log(null >= 0);  //true  = because comparisions convert null to a number,treating it as 0

console.log(undefined == 0);  //false
console.log(undefined > 0);   //false
console.log(undefined >= 0);   //false

console.log("2" === 2);    // "==="  => it checks values and also its datatype strictly
