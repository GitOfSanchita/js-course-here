// Dates -> it has been a long-standing pain point in ECMAscript.

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);   // object

//let myCreatedDate = new Date(2025, 0, 21)    // Month starts from 0 in javascript. 0 -> january.
//console.log(myCreatedDate.toDateString());   

//let myCreatedDate = new Date(2025, 0, 21, 6, 7)  
//console.log(myCreatedDate.toLocaleString());   

let myCreatedDate = new Date("01-12-2025")    // use only MM-DD-YYYY  or  YYYY-MM-DD.  ( DD-MM-YYYY -> is invalid )
console.log(myCreatedDate.toLocaleString());   

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());   // converting date into MS
console.log(Math.floor(Date.now()/1000));   // converting date into Second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());    // 0 starts from -> january
console.log(newDate.getMonth() + 1);    // 1 starts from -> january
console.log(newDate.getDay());    // 1 starts from -> Monday

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));