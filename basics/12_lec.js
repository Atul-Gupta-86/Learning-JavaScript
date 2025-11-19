let value = 100
// console.log(value)      // Give datatype as number 
let another_value = new Number (1935.23445)
console.log(another_value)// Explicitly givr data type as number and with some properties. to use on it by using '. '
11001000
console.log(another_value.toExponential(3))    // 2.00e+2  (2) --> for value of new Number(200)  // 1.94e+3 (2)     1.935e+3 (3)
console.log(another_value.toString())         
console.log(another_value.valueOf())          

console.log(another_value.toLocaleString())   // 200      (2) --> for value of new Number(200)  //1,935    (2)     1,935    (3)
//used to convert into commas value, by default in us standard. for indian standard we can use  ('en-IN')inside ()of function.

console.log(another_value.toFixed(3))          // 200.00   (2) --> for value of new Number(200)  // 1935.00 (2)     1935.000 (3)
// toFixed give n digits after the decimal and after that fixed value decimal values are ignored 
// ---> 123.2547 (3) => 123.254 // 7 is ignord , and the value of n is that which we have given in "toFixed(_)" function.  

console.log(another_value.toPrecision(3))      // 2.0e+2   (2) --> for value of new Number(200)  //1.9e+3   (2)     1.94e+3  (3)
// toPrecision give total n digit including before decimal and after decimal digits and left digits are ingnored and the value of n is that which we have given in "toPrecision(_)" function.




// Applicable to that normal Number also even if we don't define it using new keyword in vscode as well as console.
// console.log(value.toExponential(2))      // 2.00e+2         // 1.94e+3
// console.log(value.toFixed(2))            // 200.00          // 1935.00
// console.log(value.toLocaleString(2))     // 200             //1,935
// console.log(value.toPrecision(2))        // 2.0e+2          //1.9e+3
// console.log(value.toString(2))           // 11001000        //11110001111
// console.log(value.valueOf(2))            // 200             //1935



// ********************************************    Maths    *******************************************************
console.log(Maths())    // Math is also a by default fuunction. (12:00)