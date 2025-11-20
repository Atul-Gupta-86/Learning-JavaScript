const account_id = 12345 // can't be changed once decleared.
let account_mail = "accountmail@mail.com"
var account_password = "15243" //It doesn't respect block scope & functional, so we use the let keyword most of the times now a days...
account_city = "Jaipur" // We can also decleare the variable without the "var" or "const" or "let" but this is not the standard way of declearing the variable 
let account_state; // If we don't assign any value in the variable then JS make it undefined. 
console.log(account_id)
console.table([account_id, account_mail, account_password, account_city, account_state])
// This console.table([Is used to print multiple values at once ])