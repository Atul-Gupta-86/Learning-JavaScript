"use strict"; // It is used to specify that in this code we are using higher/newer version of JS code only. Even now a days we also don't need to specify this, browser automatically runs in strict mode.
// alert("we are using node JS not browser , so this will not pop up as alert in the dialog box. To get alert in node js we hava a differnt syntax")
// We can use alert in browser to pop up an alert dialog box.

let number_ = 1234 //supports up to 2^53
let string_ ="Atul"
let bigInt_ = 12345678876543n //for trading or huge numbers
let bool_ = true
let null_ = "standalone_value"
let undefined_  = "Value_not_defined_ yet..."
let symbol_ = "mostly_for_uniqueness"
let object_ ; // Further topic

console.table([number_ , string_ , bigInt_ , bool_ , null_ , undefined_ , symbol_ ])

console.log(typeof"Atul")       //String

console.log(typeof String)      //function
console.log(typeof Number)      //function
console.log(typeof BigInt)      //function
console.log(typeof Boolean)     //function
console.log(typeof Symbol)      //function
console.log(typeof null)        //object
console.log(typeof undefined)   //undefined
