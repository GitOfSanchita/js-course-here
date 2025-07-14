/*
const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item
} )

console.log(values);        // undefined      // because forEach method does not return any value
*/


// ********** using filter method **********

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNums.filter( (num) => num > 4)            // Implicit return

const newNums = myNums.filter( (num) => {
    return num > 4
})                             // Explicit return

console.log(newNums);           // [ 5, 6, 7, 8, 9, 10 ]
