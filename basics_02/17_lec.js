// Objects part 2

// const tinderUser = new Object()      // Singleton object -->means mede vis constructor
const tinderUser = {}; // non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser = {
  email: "Atul@gmail.com",
  fullName: {
    userFullName: {
      firstname: "Atul",
      lastName: "Gupta",
    },
    userMatchFullName: {
      firstName: "Aruhi",
      lastName: "Gupta",
    },
  },
};
// // console.log(regularUser.fullName)
// // console.log(regularUser.fullName.userFullName)
// console.log(regularUser.fullName.userFullName.firstname)
// console.log(regularUser.fullName.userFullName.lastName)
// // console.log(regularUser.fullName.userMatchFullName)
// console.log(regularUser.fullName.userMatchFullName.firstName)
// console.log(regularUser.fullName.userMatchFullName.lastName)

let obj1 = { 1: "A", 2: "B", 3: "C" };
let obj2 = { 4: "a", 5: "b", 6: "c" };
let obj3 = { obj1, obj2 };
// console.log(obj3)

// let obj4 = Object.assign({},obj1 , obj2)
// We can also use withut {} inside assign function but it's better to use as it gurrentee that the result will be object.
// console.log(obj4)

let obj5 = { ...obj1, ...obj2 }; // Better way to do spread ust as Array's
// console.log(obj5)


//Sometimes the data from Database comes in this format
const user = [
    { 
        id: "123",
        email: "Dummy1@gmail.com"
    },
    { 
        id: "124",
        email: "Dummy2@gmail.com"
    },
    { 
        id: "125", 
        email: "Dummy3@gmail.com" 
    },
    { 
        id: "126", 
        email: "Dummy4@gmail.com" 
    }
];
// console.log(user[1].email)      // after reaching arry by indexing we can use dot(.) notaion to accesss elements.


console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))         // Give every ibject element as an combination of an Array.