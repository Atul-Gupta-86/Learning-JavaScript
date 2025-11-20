// Arrow Function

const user = {
    username : "Atul",
    price : 999,
    welcomeMessage : function(){
        console.log(`Hello ${this.username}, Welcome back.`)  
        console.log(this)
    } 
    
}
// This keyword refers to the current context in which we are present. If I use it outside the object in the global scope then it will refer to an Empty object but inside the browser's console it refers to the windows (i.e. object inside the browser is window's object).
// user.welcomeMessage     // Do nothing
// user.welcomeMessage()
// user.username = "Aditya"

// user.welcomeMessage()

/*------Due to console.log(this)-------- Output is --> 
Hello Atul, Welcome back.
{
  username: 'Atul',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
  */


// let's see the global this --> for windows
// console.log(this)
function chai(){
    let username = "Autl"
    // console.log(this.username)          //  Can't be accessed --> INvalid Syntax 
}


let anotherfncn = () => {    // let anotherfncn = function () {   ---> remove function and add "=>" after parenthesis
    console.log("Hello world")
    console.log(this)        // Here "this" also give Empty objetc. // myth -> this doesn't work in arrow function.
}
// anotherfncn()


// const addTwo = (num1 , num2 ) => {
//     return num1 +num2 
// }
// console.log(addTwo (6,65))

// Another style of use callled Implicit return in which we remove paranthesis and take inside code into the same line of arrow function declearation and remove (otherwise blunder) return key.


// const addTwo = (num1 , num2 ) => num1 +num2
// console.log(addTwo (6,65))
// Another way of same thing .
const addTwo = (num1 , num2 ) => (num1 +num2)
// console.log(addTwo (6,65))



// When we have to retun an object in an arrow fnunction 
const test  = () => ({name: "Atul", age :21 }) 