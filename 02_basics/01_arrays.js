// array  -> javascript array-copy operations create shallow copies.

// Array declaration types
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "Naagraj"]
const myArr2 = new Array (1, 2, 3, 4)
console.log(myArr[1]);    //1
console.log(myArr2[1]);   //2

// Array methods

myArr.push(6)   // push -> adding values in the array
console.log(myArr);  // [0, 1,....., 6]

myArr.pop()  // pop -> remove the values from last
console.log(myArr);   // [0,....., 5]  //removes 6 from last

myArr.unshift(9)
console.log(myArr);   // [9, 0, 1,...., 5]

myArr.shift()   // [0,....., 5]     //removes 9 from first
console.log(myArr);   

console.log(myArr.includes(8));  // question for 8 is including or not -> false

console.log(myArr.indexOf(8));  // -1 -> does not exist
console.log(myArr.indexOf(2));  // 2 -> because [0, 1,..., 5]

const newArr = myArr.join()
console.log(myArr);      // [0, 1,..., 5]
console.log(typeof myArr);  // Object
console.log(newArr);     // 0,1,2,3,4,5 
console.log(typeof newArr);  // String


// slice, splice

console.log("A ", myArr);  // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)   // [1, 2]
console.log(myn1);
console.log("B ", myArr);     // B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)   // [ 1, 2, 3 ]
console.log(myn2);
console.log("C ", myArr);    // C  [ 0, 4, 5 ]

// "splice" -> manipulates the original array