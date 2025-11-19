let arr_1 = ["Atul","Ashish", "Aditya"]
let arr_2 = ["Ansh", "Anurag"]


// arr_1.push(arr_2)                    // Create an array inside array.
// // console.log(arr_1.push(arr_2)) // Give output as 4 (total number of elements) not the arary afteer push :(
// console.log(arr_1)
// console.log(arr_1.concat(arr_2))      // Concat the arrays element.


// Spread can be used for doing same thing at many places specially when we have to it with more than 2 array.
// spread syntax ---> (...1st_arr_name, ... 2nd_array_name, ...3rd_array_name and so on...)
let arr_3 = [...arr_1, ...arr_2]
// console.log(arr_3)


// Flating of an array element to make it internal elements free 
let arr_4 = [43, 53, 73, [72, 69, [57, [88, 45], 1], 55, 71],75,95,80]
// console.log(arr_4.flat(1))
// console.log(arr_4.flat(2))          // flat(__) <--- inside value tell us that till what depth it need to be flated.
// console.log(arr_4.flat(3))
// console.log(arr_4.flat(Infinity))

// console.log(Array.isArray(["A","t","u","l"]))           // true
// console.log(Array.isArray("Anurag"))                    // false
// console.log(Array.from("Anurag"))


console.log(Array.from({name: "Atul"}))     // returns []  <--- empty Array when unabe to make array so we have to be specific that weather we have to make array of it's key or of it's value


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))         // Cretes an Array of all the variables or whatever we give input. 
