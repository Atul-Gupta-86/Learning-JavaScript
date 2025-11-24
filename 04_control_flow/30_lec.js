// ForEach loop doesen't return anything wheather we want or not.

// const my_array = ["Atul", "ashish", "Aditya","Ansh", "Amrit", "Rudra","Anurag"]


// const storage = my_array.forEach( (items) => {
//     console.log(items)
//     // return items                // For loop doesen't return anything wheather we want or not.
// })

// console.log(storage)        // undefined

//_____________________________________________________ Filter operation (in-built method)_________________________________________________________________________
// In filter we hava to give condition after callBackFunction and the value that satisfy that condiotions are returned and rest are not. 
// Filters are similar as a call_Back_Function. 
const arr_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr_2 = arr_1.filter( (items ) => items > 4 )
const arr_3 = arr_1.filter( (items ) => (items > 4) )
const arr_4 = arr_1.filter( (items ) => {items > 4} )


// arrow function can also be decleared as  i>() => ()      ii > () => {}     iii> () => ___ when have to run/write only onle line.

// But if we write it as ( ) => { //then we need to write return keyword otherwise no return vaalue will be obtained.}

// But if we write it as ( ) => ( ) / ( ) => ___ then we need not to write return only the condition of elements to be return.


// console.log(arr_2)
// console.log(arr_3)
// console.log(arr_4)


// Crazy things :- Still if you want to use this conditional thing in forEach loop then we have to write the the if code
let array_1 = []
arr_1.forEach( (items) => {
    if(items >7){
        array_1.push(items)
    }
})
// console.log(array_1)
// ______________________________________________________________________________________________________________________________


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
//   console.log(userBooks);


// ______________________________________________________05_iterators / Seven.js (Youtube series)______________________________________________________

// Map --> it is also a in -built method that take input of a callBackkFunction and return a value.
// it can be used to do some operation on every element of an array.

const arr_5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let new_Array = arr_5.map( (nums) => {
    return nums + 11
})
// console.log(new_Array)


// // Can also be done using forEach loop
// arr_5.forEach( (nums) => {
//     console.log(nums + 11)
// })

// Filter filter out the elements according to the conditions given but in map it iterates through all the elements.

// ______________________________________________________________________________________________________________________________
// Chaining :--> to apply 2/3/4 mehods simultaniously like .....filter.map.map.filter.map all in one .

const arr_7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let new_Array_1 = arr_7.map( (num) => num*10).map( (num) => num + 4).filter( (nums) => nums >=27 )
// console.log(new_Array_1)


// ______________________________________________________05_iterators / nine.js (Youtube series)______________________________________________________

// Reduce :-->
const arr_8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let my_total = arr_8.reduce( function (acc, curval) {         // acc -> accumulator , curval -> current element of array 
//     console.log(`accumulator : ${acc}, current_value : ${curval}`)
//     return acc + curval
// } , 0  ) // 0 is the value given to the accumulator initially
// console.log(my_total)


// ______________________________________________________Via arrow function.--->______________________________________________________

// const initial_value = 20
// let my_total_1 = arr_8.reduce( (acc, curval) => (         // acc -> accumulator , curval -> current element of array 
//     console.log(`accumulator : ${acc}, current_value : ${curval}`),
//     acc + curval
//  ) , initial_value ) // initial_value is the value given to the accumulator initially
// console.log(my_total_1)
//              |
//              |
//              |
//              V
const initial_value = 20
let my_total_1 = arr_8.reduce( (acc, curval) => acc + curval , initial_value ) 
// console.log(my_total_1)

const shoppingCart = [
    {
        courseName : "JS Course",
        coursePrice : 3999
    },
    {
        courseName : "PY Course",
        coursePrice : 799
    },
    {
        courseName : "CPP Course",
        coursePrice : 1599
    },
    {
        courseName : "RUST Course",
        coursePrice : 2999
    }
]

const totalPriceOfCart = shoppingCart.reduce( (acc , curval) => (acc + curval.coursePrice) , 0)
console.log(totalPriceOfCart)

// node 04_control_flow/30_lec.js