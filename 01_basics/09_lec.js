// Data Types --> Mainly into two ->
// i > Primitive     ii> non-primitive

// Primitve are of 7 types ---> Number, String, Boolean, BigInt, Symbol, Null, undefined  ( call by value)
// Reference/Non-primitive ---> Array, Objects, Functions                                 ( call by reference)

// we can just declare variable and not necessarly need to assign value to then  ex:- let varible1;
let varible1;
// console.log(varible1)  // undefined

// we can define symbol as let id1 = Symbol('@')
let id1 = Symbol('@')
let id2 = Symbol('@')
//if we assign same symbol to two different id's then even after that, both will be different Symbols
// console.log(id1===id2)  //false


let biginteger = 1234n              // we can make any number big int vis adding 'n' in the end of that number.
// console.log(typeof biginteger)      // bigint

let myarray = ["Atul", "neha", "rashmi", "ashika"]
// console.log(typeof myarray)   // object -> array is an special type of object in JavaScript.

let myObject =  {
    name :"ATul",
    age : 22,
    studies : "ongoing"
}
// console.log(myObject)

let myfunction = function(){
    console.log("Hello World")
    return 0;
}
// console.log(myfunction())           // Hello world ↵ 0 
// console.log(typeof myfunction)      // function    ---> but called as object function
// console.log(typeof myfunction())    // Hello World ↵ number

/* Typeof of these  :---> 

i    > undefined ---> undefined
ii   > Null      ---> object 
iii  > Boolean   ---> boolean 
iv   > Number    ---> number
v    > String    ---> string
vi   > Array     ---> object 
vii  > object    ---> object
viii > function  ---> function (object function)

*/
