// .----------------------------------------Date and time.---------------------------------------- 
// .----------------------------------------Date is an object in JavaScript..----------------------------------------


let my_date = new Date()
// console.log (my_date)                           //               -2025-11-19T17:59:09.946Z
// console.log (my_date.toJSON())                  //               -2025-11-19T17:59:09.946Z


// console.log (my_date.toString())                //               -Wed Nov 19 2025 17:59:09 GMT+0000 (Coordinated Universal Time)
// console.log (my_date.toDateString())            //               -Wed Nov 19 2025
// console.log (my_date.toTimeString())            //               -17:59:09 GMT+0000 (Coordinated Universal Time)


// console.log (my_date.toLocaleString())          // local format  -11/19/2025, 5:59:09 PM
// console.log (my_date.toLocaleDateString())      // local format  -11/19/2025
// console.log (my_date.toLocaleTimeString())      // local format  -5:59:09 PM

// console.log (my_date.toUTCString())             //               -Wed, 19 Nov 2025 17:59:09 GMT


// Wrong Format 
// console.log(Date.toString())  ---> will not work :( 

let date0 = new Date(2025, 0, 31, 6, 12, 10, 1000)    // YYYY MM DD HH MM SS MS ( Months starts from 0 in JS (January -> 0))
// console.log(date0.toString())


let date1 = new Date("2025-01-14")    // YYYY MM DD ( Months starts from 1 in this format)
// console.log(date1.toString())
let date2 = new Date("01-31-2025")    // MM DD YYYY ( Months starts from 1 in this format)
// console.log(date2.toString())

let date3 = Date.now()               // Give total miliseconds till now from 1st jan 1970
// console.log(date3)
// console.log(date2.getTime())         // Give total miliseconds till date2 from 1st jan 1970

// console.log(date2.getTime()-date1.getTime()) // Ussed to find winner in a game.

let date4 = new Date
// console.log(date4.getMinutes)   // Similarly various other methods like getDate, getDay, getFullYear, getMonths, getHours... etc
// console.log((date4.getMonth)+1) // Usually in Months we add 1 as months in Js starts from 0 indexing.