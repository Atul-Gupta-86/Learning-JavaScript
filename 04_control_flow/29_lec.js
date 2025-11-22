// For of loop
//______________________________________________________________________________________________________________________________


// [ { }, { }, {  }, { }, { }]      // Objects in array
// [ " ", " ", " ", " ", " "]       // Strings in array

const arr_1 = [71, 62, 34, 42, 56]
// for (const iterator of object) {   // Here object doesn't refer to the JS object it just an objec(thing) on which thing we are applying the loop.
//     //syntax of forof loop
// }

// Specialised loop for arrays in Js 

for (const elements of arr_1) {          // automativclly find out the size of loop, when loop will end what iteration and so on all things.
    // console.log(elements)
}

let greetings = "Hello World!"
 for (const letters of greetings) {
    // console.log(`${letters}`)
 }
//______________________________________________________________________________________________________________________________



//**************************** MAPS ****************************
const map_1 = new Map()
map_1.set ("IN", "INDIA")
map_1.set ("USA", "UNITED STATES OF AMERICA")
map_1.set ("FR", "FRANCE")
map_1.set ("RU", "RUSSIA")
// map_1.set ("RU", "RUSSIA")
// Maps are unique key pairs and the order is also maintained in it, if we try to add same enteties agian then it wii not get added in it (give no error on adding but will not get added up)

// console.log(map_1)


for (const keys_of_map of map_1) {
    // console.log( keys_of_map)
}


// To get keys and value seperately 
for (const [keys_of_map, values_of_map] of map_1) { 
    // console.log(keys_of_map, ':-' ,values_of_map)
}


//______________________________________________________________________________________________________________________________

// Objects can't be iterate via forof loop.

const myObj1 = new Object ({
    game1 : "GTA V",
    game2 : "GTA VICE CITY"
})
const myObj2 = {
    game1 : "GTA V",
    game2 : "GTA VICE CITY"
}

// console.log(myObj)
// for (const keys_values of myObj1) {
    // console.log(keys_values)                // Objects in js can't be iterated via forof loop
// }
// for (const keys_values of myObj2) {
    // console.log(keys_values)                // Objects in js can't be iterated via forof loop
// }

//_____________________________________________________ Forin loop_________________________________________________________________________
// Objects can be iterated by forin loop.

for (const key in myObj1) {
//    console.log(key,":-", myObj1[key])    // By default it only print keys in forin loop, to get values :- myObj1[key] --> Give key's values.
}

const arr_2 = [77, 66, 33, 44, 55]
for (const key in arr_2) {
    // console.log(key , ":-", arr_2[key]) // we can access the idex as well as element of an array via forin loop.
}

const name = "Atul"
for (const key in name) {
    // console.log(key , ":-", name[key]) // we can access the idex as well as element of an array via forin loop.
}
// Map is not iteratable. 
// IN forof loop also map is printed as array of two element and we seperate via [key , value] and print seperately.
//                                                                                                           |
//                                                                                                           |
//                                                                                                           V
//                                                              for (const [keys_of_map, values_of_map] of map_1) { 
//                                                                  console.log(keys_of_map, ':-' ,values_of_map)
//                                                              }
// Map can't be iterated via forin loop. 

//_____________________________________________________ Foreach loop_________________________________________________________________________

// Foreach loop is a inbuilt prototype of array in js.
// This is a Higher order function.--->

const array_1 = ["JavaScript", "Python", "Ruby", "Cpp"]


// Foreach loop is a inbuilt prototype of array in js.
array_1.forEach ( function (items) {
//    console.log(items)                          // Normal function.
} )  

//       In the forEach parenthesis we pass a callbacfun -> call back function is defined same as a normal function without name of the
//       function and the function parameter takes the i/ items/ val/ value or any_name we give , now we can define the function in the scope
//       of this callbackfunction 

array_1.forEach( (items) => { 
    // console.log(items)                          // Arrow function.
} )


function printMe(items){
    console.log(items)
}
// array_1.forEach( printMe )      // Just pass the function as printMe not have to execute the function as printMe()

array_1.forEach( (items , index, arr) => {
    // console.log(items, index , arr )
})
//                This shows that the forEach loop have also access to the index and the whole array in each iteration.

// Objects in forEach loop 
const myarray = [
    {
        "languageName" : "JavaScript",
        "languageFileName" : ".js"
    },
    {
        "languageName" : "Python",
        "languageFileName" : ".py"
    },
    {
        "languageName" : "C++",
        "languageFileName" : ".cpp"
    }
]

myarray.forEach( (items=>{
    // console.log( items.languageName, ":-", items.languageFileName)
}) )