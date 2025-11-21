// i   > If -else
if ("condition") {
   //code;
}
// comparisons can be done in conditions checking ->     <, >, >=, <=, ==, !=, ===, !==   <-- New one.



// ------------- Bad practices -----------
// Sometimes we don't write scope--> but then we have to write code in same line and use semicolon (";") at the end or can write multiple line by using (",") at the end of line, and again at the end use semicolon (";")
// if (true) console.log(`Code Executed`);
// if (true) console.log(`Code Executed one `),
//           console.log(`Code Executed two`);



// ii  > Switch case


// Truthy value and False value
// falsy -> "", false, 0, -0, 0n (BigInt), null, undefined, NaN
// Truthy -> "0", 'false'," ", {}, function(){}, "xyz", [], rest all things


// How to check a array is empty or an object is empty
let arr = []  
if (arr.length == 0 ){
    console.log(`Array is empty`)
}

let obj ={}
if (Object.keys(obj).length == 0 ){
    console.log(`Object is empty`)
}

 
// Nullish Coalescing operator (??) : null undefined
let var1, var2, var3, var4;
var1 = 5 ?? 10              // var1 = 5
var2 = null ?? 17           // var2 = 17
var3= 27 ?? 54              // var3 = 27
var4 = undefined ?? 68      // var4 = 68

console.log(var1,var2,var3,var4)


// Terniary operator 
"condition" ? true : false  
let iceTeaPrice = 100
iceTeaPrice <80 ? console.log("Price less than 80") : console.log("Price more than 80")