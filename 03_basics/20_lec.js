// For situation like adding items in shopping cart of a user 

function totalCartValue(num1){
    return num1
}
// console.log(totalCartValue(3))
// But we cant add more to it , as we dont know how many items user is going to add in the cart.
// Use of rest operator._______
//                             |   
//                             |   
//                             V   
function calculateCartValue(...num){
    return num
}
let arr_1 = calculateCartValue(20, 46, 91, 84, 53, 57, 93, 107, 228 )
let  sum = 0
for (i =0; i<=(arr_1.length)- 1; i++){
    sum+=arr_1[i]
}
// console.log(sum)



// objects in parameter 

const data = {
    name : "Atul Gupta",
    age : 21
}
function object_handling (object) {
    console.log(`My name is ${object.name} and my age is ${object.age}.`)
}
// object_handling(data)           // pass the pre defined object as an argument 
// object_handling({               // pass the object itself.
//     name : "Atharv Gupta",
//     age : 20
// })


// Array handeling

const myarr = [86,90,50,40,20]

function returnSecondvalue(array){
    console.log(`Second value of your array is ${array[1]}.`)
}

// returnSecondvalue(myarr)                // pass the pre defined array as an argument
// returnSecondvalue([21,56,34,90])        // pass the array itself.