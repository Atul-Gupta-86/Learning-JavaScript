// Array
let arr_1 = [1,3,5,13,"Atul", "Ashish",false, '@']
// console.log(typeof(arr_1[7]))     //  String


let arr_2 = new Array("Atul", "Ashish", "Aditya")  // Here we need not to use Square brackets.
// console.log(arr_2)

// Array methods:-->

arr_1.push("Ironman")
// console.log(arr_1)
arr_1.pop()
// console.log(arr_1)
arr_1.unshift("add_in_begning")
// console.log(arr_1)
arr_1.shift()
// console.log(arr_1)

// console.log(arr_1.includes("Ashish"))
// console.log(arr_1.includes("Anurag"))
// console.log(arr_1.indexOf("Atul"))
// console.log(arr_1.indexOf("Ansh"))

// console.log(arr_1.join())                        // Give array'selement in csv formatas a String Data type.
// console.log(typeof(arr_1.join()))               // String

let arr_3 = [21, 43, 56, 87, 91, 45, 54 ,62 ,71, 96] 
console.log(arr_3)
console.log(arr_3.slice(3,5))       // Give the Elements from index 3 to index (5-1)
console.log(arr_3)
console.log(arr_3.splice(3,7))      // Give total 7 Element Starting from index 3 and also manipulate the orignal Array.
console.log(arr_3)

