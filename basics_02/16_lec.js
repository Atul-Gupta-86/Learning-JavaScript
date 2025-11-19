// Objects

// We can from object via two type          i> literals            ii> constructor ---> (Object.create )
// Wheneve we made an object via constructor it become singleton --> means that it is only one object of its own type
// But when we made dfrom literals then it is not singleton.



// Objects literals

let id = Symbol('#')

let my_obje_1 = {
    name : "Atul",                // key is always a string it may or may not look like string but system processes it as String.
    age : 21,                     // But the value can be any Data type you can store.
    location: "Bhopal",
    email: "Atul@google.com",
    "last login days" : ["Sunday","Monday"],
    [id] : '@' 
}

// console.log(my_obje_1.email)
// console.log(my_obje_1["email"])                 // More authentic asthe keys are always a String.
// console.log(my_obje_1["last login days"])       // We can't access this without the square brackets.

// console.log(my_obje_1[id])
// To give symbol in a key value we have to 1st define a variable with its symbol and then deifne that same varibale in the object as key within Square brackets and then assign whatever symbol we want to give inside the key and then to print we have to use square bracket but not key shouldn't be in double inverted comma ("__").


my_obje_1.age = 19
// console.log(my_obje_1.age)
// Object.freeze(my_obje_1)        // resist any chabges in the freed object, we can either freeze whole object or not but can't only key.
my_obje_1.age = 24
// console.log(my_obje_1)

my_obje_1.greetigns = function(){
    console.log("Hello user!")
}
my_obje_1.greetigns_1 = function(){
    console.log(`Hello ${this.name}!`)   // this define that we are selecting the name key from this object in which weare currently in.
}
// my_obje_1.greetigns()
// my_obje_1.greetigns_1()

// console.log(my_obje_1.greetigns())                   // this output will give an extra the undefined line for console.log()
// console.log(my_obje_1.greetigns_1())                 // this output will give an extra the undefined line for console.log()