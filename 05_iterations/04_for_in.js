const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

/* for (const [key, value] of myObject) {
   console.log(key);
}*/           // TypeError: myObject is not iterable

// so, for object for-of loop is not applicable

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);
}

/*
js is shortcut for javascript
cpp is shortcut for C++
rb is shortcut for ruby
swift is shortcut for swift by apple
*/


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}     // keys -> [0, 1, 2, 3, 4]


/*const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

for (const key in map) {
    console.log(key);
}  
*/ 
  
// map is not iterable for 'for-in' loop