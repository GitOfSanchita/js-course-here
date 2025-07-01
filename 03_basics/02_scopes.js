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



// Nested scope
function one(){
    const username = "Sanchita"
    const coursename = "javascript"

    function two(){
        const website = "youtube"
        console.log(username);      
    }
   //console.log(website);     // ReferenceError: website is not defined
    
    two()    // Sanchita 

    console.log(coursename);
}

one()    // javascript



if (true) {
    const username = "sanchita"

    if (username === "sanchita") {
        const website = " youtube"
        console.log(username + website);       // sanchita youtube
    }
    //console.log(website);      // ReferenceError: website is not defined
}

//console.log(username);         // ReferenceError: username is not defined



// +++++++++++++++++++++++++ Interesting topic ++++++++++++++++++++++++++


// function declaration types

console.log(addOne(5));    // 6

function addOne(num){
    return num + 1
}


//console.log(addTwo(5));       // ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num + 2
}     // 'addTwo' => function expression or a variable which holds the function

