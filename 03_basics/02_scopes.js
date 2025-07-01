//var c = 300      // global scope
let a = 300      // value of 'a' is independent for the 'if' function.
if (true) {
    let a = 10
    const b = 20
    console.log("Inner:", a);    // Inner: 10    => Blog scope
    
   //var  //c = 30
}                  // here '{}' is a Blog scope inside 'if'.   Any scope outside 'if' is Global scope.

//console.log(a);    // ReferenceError: a is not defined
//console.log(b);    // ReferenceError: b is not defined
//console.log(c);    // 30    => that is the problem

console.log(a);     // 300     => Global scope