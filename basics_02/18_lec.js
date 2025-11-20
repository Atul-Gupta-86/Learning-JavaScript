// Object de-structuring

const course = {
    "course name" : "JavaScript_Youtube",
    price : 999,
    courseInstructor : "Hitesh Chaudhary"
}


// To call the key_value multiple times we have to write it multiple times so alternately we can do a thing like -->

const {courseInstructor} = course // ---> const {---key---} = ---variable_name/identifier---
console.log(courseInstructor)  // That's it no need to call like console.log(course.courseInstructor)


const {price : amount } = course // ---> const {key : what_we_want_to_call_it } = ---variable_name/identifier---
console.log(amount )  // That's it no need to call like console.log(course.courseInstructor)

// similar kind of things can be viewed in react where destructuring is done.
// Arrayde-structuring is also there but rarely used .


// API --> Is nothing, It's some values that came from the backend, and how we write it --> previously it was being written in XML structure (which were complex ) but now a days these are mostly coming in JSON format (JSON is an object).


/* Example of JSON data -->
{
    "name" : "Atul",
    "course_name" : "JS in hindi",
    "price" : "Free",

}
*/
// Sometimes API also come in Array format and in that array there are many objects inside that as element of Array.


