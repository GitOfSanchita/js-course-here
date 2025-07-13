// for 

/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}        // ReferenceError: array is not defined
 */


for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is the best number");
        
    }
    console.log(element);
 
}         
//console.log(element);        // ReferenceError: element is not defined         // because of block scope

/* 0 1 2 3 4 5 is the best number 5 6 7 8 9 */

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log(i + '*' + j + ' = ' + i*j);
        
    }       // print 1-10 table
    
}


let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}
/*
3
flash
batman
superman
*/

// if index <= myArray.length , then undefined will be printed in the last.



// break and continue

/*
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${index}`);
    
}

Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Detected 5
*/

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
    
}