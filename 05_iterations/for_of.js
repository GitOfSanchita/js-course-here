// for of loop

// ["", "", ""]
// [{}, {}, {}]

const number = [1, 2, 3, 4, 5]

for (const num of number) {
    console.log(`Numbers of array: ${num}`);
}                                 // for array


const greetings = "Hello World!"

for (const greet of greetings) {
    console.log(greet);
}                                 // for string



// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map);

/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/

for (const [key, value] of map) {            // [key, value]  ->  de-structuring of array
    console.log(key, ':-', value);
}                                   // for map
              
/*
IN :- India
USA :- United States of America
Fr :- France
*/