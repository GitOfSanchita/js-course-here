// forEach, filter, map  ->   callback function


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNumbers = myNumbers.map( (num) => {return num > 4} )           // [false, false, false, false, true,  true, true,  true,  true, true]
const newNumbers = myNumbers.map( (num) => {return num + 10}  )

console.log(newNumbers);              //  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20] 



const newNumbs = myNumbers
                  .map( (num) =>  num * 10 )
                  .map( (num) =>  num + 1 )
                  .filter( (num) =>  num >= 40 )

console.log(newNumbs);                // [41, 51,  61, 71, 81, 91, 101]
                  