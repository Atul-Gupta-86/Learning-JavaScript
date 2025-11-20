// closure in JavaScript
// The inner function/ function inside the bigger scope can access the outer/ bigger/ global varible but not vice-versa.


// --------------------------------Some more Interesting thing about function--------------------------------



console.log(addOne(5))           // Will give output an no throw error

function addOne (num1){
    return num1 + 1
}



console.log(addTwo(2))          // Throw an Error 

let addTwo = function(num2){    // This is also a method of definig a function, name of function is the  variable name  
    return num2 + 2 
}
