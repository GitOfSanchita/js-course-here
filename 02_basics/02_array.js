const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

//marvel_heros.push(dc_heros)   
//console.log(marvel_heros);    // [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
//console.log(marvel_heros[3][1]);     // Flash

//concat operator is applicable for only two arrays
const allHeros = marvel_heros.concat(dc_heros)    // 'concat' -> returns a new array
console.log(allHeros);     // [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

//spread operator is applicable for two or more arrays
const all_new_heros = [...marvel_heros, ...dc_heros]    // 'spread' -> also returns a new array
console.log(all_new_heros);    // [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)   // flat() -> maximum recursion depth for coverting into a single array.
console.log(real_another_array);    // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


// isArray -> it questinos if given value is array or not.
// from -> it converts given value into an array.
// of -> returns a new array from a set of elements. 

console.log(Array.isArray("Sanchita"));   // false
console.log(Array.from("Sanchita"));      // ['S', 'a', 'n','c', 'h', 'i','t', 'a']
console.log(Array.from({name: "sanchita"}));     // []              *** // Important for Interview ***
// 'name' -> key, "sanchita" -> value

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));   // [ 100, 200, 300 ]