// Comparasions

// console.log(2<3)
// console.log(2>3)
// console.log(2<=3)
// console.log(2>=3)
// console.log(2!=3)
// console.log(2==3)


console.log("2">1)      // true
console.log("02">1)     // true

// But sometimes we don't get desired result so make sure while comparing that we are comaparing the same datatype.

console.log(null > 0)           // false 
console.log(null == 0)          // false
console.log(null >= 0)          // true b/c when we use comparision operator then that time null get converts to 0 and then it gives true that null >= 0 butin == operator null did't get converted to 0 so give false.

// ** Strict Check "===" not only check value but also data type.
console.log("2" === 2)       // false 
console.log("2"  == 2)       // true 