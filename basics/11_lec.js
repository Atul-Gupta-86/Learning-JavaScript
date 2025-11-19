// Strings in JavaScript

let fst_name ="Atul "
let lst_name = "Gupta"
// console.log(fst_name + lst_name)

// Betterwaysto write code now a days
// console.log(`Hello my first name is ${fst_name}and my last name is ${lst_name}.`)



// Inside console in webpage it--->   let name = new String("Atul")   <--- behaves like object of key as indexing position and letters as vlaue.
// We can get vale index wise liek as name [2] = r (output)


let name_1 = new String("Hare Narain Narain Hare Hare")
// console.log(name_1[2]) // It become String object and it have keys as indexing position and letters as values . --->   0 : A,   1 : t,   2 : u,   3 : l and have various methods that can be applied on the Strings such aslength ad many more. 
console.log(name_1.__proto__) // gives{} means have various object of this name_1. and we can access that using name_1.xyz
console.log(name_1.length)
console.log(name_1.toLowerCase())
console.log(name_1.toUpperCase())
console.log(name_1.charAt(3))
console.log(name_1.indexOf("a"))
console.log(name_1.substring(0,3))  // can't process on negative values
console.log(name_1.slice(-3,4))     // can negative indexing also but substing can't process on negative values 
console.log(name_1.trim())          // Trim remove the extra whitespace given in the string from startinhg and End also.  
console.log(name_1.replace('N','n'))
console.log(name_1.includes("rain"))
console.log(name_1.includes("ruin"))
console.log(name_1.split(" "))      // seperate and make an array by seperating that from the given text inthe bracket. here -> " ". 
// Similarly Strings have various methods or function which cna be applied and used.







