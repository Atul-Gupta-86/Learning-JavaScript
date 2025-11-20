// Conversion of variables
// Sometimes when we get data from backend we don't know it's data type so we need to converse it into our desires data type.

let score = "33"
let score_in_numer = Number(score)

// console.log(typeof (score))
// console.log(score)
// console.log(typeof (score_in_numer))
// console.log(score_in_numer)

// JavaScript can conver anything into number as   "NaN"   so be sure that what you are converting.
let score_1 = "33abc"
let Number_score_1 = Number(score_1)
// console.log(typeof Number_score_1)
// console.log(Number_score_1)             // NaN  
let score_2 = true
let Number_score_2 = Number(score_2)
// console.log(typeof Number_score_2)
// console.log(Number_score_2)             // 1/0
let score_3 = Symbol('@')
let Number_score_3 = Number(score_3)
// console.log(typeof Number_score_3)
// console.log(Number_score_3)             // NaN
let score_4 = null
let Number_score_4 = Number(score_4)
// console.log(typeof Number_score_4)
// console.log(Number_score_4)             // 0
let score_5 = undefined
let Number_score_5 = Number(score_5)
// console.log(typeof Number_score_5)
// console.log(Number_score_5)             // NaN


/* boolean conversion
any_Number    => true 
0             => false
""            => false
"anything"    => true
undefined     => false
null          => false
'Symbol'      => true
"NaN"         => false
*/

let score_6 = NaN
let boolean_score_6 = Boolean(score_6)
// console.log(typeof boolean_score_6)
// console.log(boolean_score_6)        

// Anything can be change tto string datatype.

let var1 = undefined
let string_var1 = String(var1)
// console.log(typeof string_var1)
// console.log(string_var1)
let var2 = null
let string_var2 = String(var2)
// console.log(typeof string_var2)
// console.log(string_var2)
let var3 = Symbol('@')
let string_var3 = String(var3)
// console.log(typeof string_var3)
// console.log(string_var3)