// Immediately Invoked Function Expressions (IIFE)     -> used for to eliminate global scope pollution problem and immediate function execution.

/*
function connect () {
    console.log(`DB CONNECTED`);
}
connect()        // DB CONNECTED
*/

(function connect () {
    // named IIFE
    console.log(`DB CONNECTED`);
})();             // DB CONNECTED       // ; -> mandatory here for stopping invoketion or ending this code.

// ()()  ->   where 1st '()' is for function definition and 2nd '()' is for function execution.


( () => {
    // unnamed IIFE
    console.log(`DB CONNECTED again`);
} )();             // DB CONNECTED again        // ; -> mandatory here for same reason.


( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED again ${name}`);
} )('Sanchita')           // DB CONNECTED again Sanchita