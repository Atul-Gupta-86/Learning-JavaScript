// JavaScript Execution Context (EC)


/*
whenever we give code -> there is a global execution context (EC) form -> this (different for node and console) and the code is kept in that.
js is a single thereded.
everything  inside this is a process

there are two type of exection context (EC)
i > Glibal EC       ii > functional EC         iii > Eval EC

Js run our code in two phase 
i  > Memory creation phase/ memory phase/ creation phase
ii > Execution phase 

In MCP only spaces are alloted to the varibles and all that we have defined but not executed and execution (+, -, *, /, % ... ) is done in MEP


Let's see via a code.
//          |
//          |
//          V
// let var1 = 10 
// let var2 = 5 
// function addNum (um1, num2){
//     let total = num1 + num2
//     return total
// }
// let reult1 = addNum(var1 , var2)
// let resut2 = addNum(10, 2)
//          |
//          |
//          V
// i   > Global Execution       -> inside this
// ii  > Memory creation phase  -> var1 -> undefined
//                              -> addNum -> definition of function    (um1, num2){
//                                                                   let total = num1 + num2
//                                                                   return total
//                                                                   }
//                              -> result1 -> undefined
//                              -> result2 -> undefined
// iii > Memory execution phase 
//          -> var1 = 10
//          -> var2 = 5
//          -> var2 = 5
//          -> addNum -> will make a new executon context.
//                                                        -> new varible Environment + Execution thread. 
//                                                        -> again for every time a function is called a MCP and MEP is done. 
//                                                  MCP   -> val1 -> undefined , val2 -> undefined, total -> undefined
//                                                  MEP   -> num1 -> 10 , num2 -> 5, total -> 15
//          -> result 1 -> 15. as the result is returned to global context, and addNum execution context Deleted.

//          -> addNUm -> will make a new executon context..
//                                                        -> new varible Environment + Execution thread. 
//                                                        -> again for every time a function is called a MCP and MEP is done. 
//                                                  MCP   -> val1 -> undefined , val2 -> undefined, total -> undefined
//                                                  MEP   -> num1 -> 10 , num2 -> 2, total -> 12
//          -> result 2 -> 12. as the result is returned to global context, and addNum execution context Deleted.

call stack 
 
*/