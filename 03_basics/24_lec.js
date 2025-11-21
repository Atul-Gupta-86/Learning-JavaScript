// Imediately Invoked Function Expression

function chai() {
    console.log("DB CONNECTED")
}
// chai()
//             |   
//             |   
//             V   
// Named IIFE
(function chai() {
    console.log("DB CONNECTED")
})();                                    // IIFE

// Why to use IIFE ?
// Many times we face problem due to global scope pollution so we use IIFE to remove the pollution of varible/ any pollution due to global scope.
// to use IIFE properly we need to put ";" after the IIFE b/c it itself don't know when to stop it context so use ";" at the End.

// Via arrow function / Unamed IIFE
(() => {
    console.log(`DB CONNECTED TWO`)
    }) ();


// How to pass an parameter in IIFE ?
((occurance) => {
    console.log(`${occurance} TIME DB CONNECTED `)
    }) ("3rd");   



// node 03_basics/24_lec.js