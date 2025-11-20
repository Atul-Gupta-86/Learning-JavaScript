// Functions

function test() {
    console.log("Hello Atul ! ")
}
// test()


// function sum (num1 , num2 ){
//     console.log(num1+num2)
// }
// // sum(2,5)
// const result = sum(3,7) 
// console.log("result: ", result)   // Give undefined.
//                 |   
//                 |   
//                 |   
//                 |   
//                 |   
//                 V   
function sum(num1, num2) {
    // console.log(num1 + num2)
    return num1 + num2
}
const result = sum(3, 7)
// console.log("result: ", result)   // Give 10.


// function loginUserMessage (userName){
//     return `Hello ${userName} !`     
// }

// const popMesage = loginUserMessage("Atul")
// console.log(popMesage)
//                 |   
//                 |   
//                 V   
// console.log(loginUserMessage("Atul"))
// console.log(loginUserMessage())         // Hello undefined ! -->, so we will check it as is there any argument or not.





// function loginUserMessage(userName) {
//     if (userName != null) {
//         return `Hello ${userName} !`
//     }
//         return "Enter the User Name."
// }
// console.log(loginUserMessage("Atul"))
// console.log(loginUserMessage()) 
// console.log(loginUserMessage())  
//                 |   
//                 |   
//                 V   


// Hitesh code below
function loginUserMessage(userName) {
    if (userName === undefined) {            //----same as------> if (userName == null) { ---> be cautious there is double equal only.
        return "Enter the User Name."
    }
    return `Hello ${userName} !`
}
// console.log(loginUserMessage())  
//                 |   
//                 |   
//                 V   
function loginUserMessage(userName) {
    if (!userName) {                  // !something/variable === undefined, I guesss
        return "Enter the User Name." // when something/variable is not defined then we
    }                                 // can say that, not(!) that something/variable  
    return `Hello ${userName} !`
}
// console.log(loginUserMessage())  


// Default parameter 
function loginUserMessage(userName = "User") {
    return `Hello ${userName} !`
}
console.log(loginUserMessage())