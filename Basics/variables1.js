const accountId = 144324            //value cannot be changed
let accountEmail = "aish@gmail.com"
var accountPassword = "12345"
accountCity = "Vasai"


//accountId = 2
accountEmail = "aishwarya@gmail.com"
accountPassword = "67891"
accountCity = "Bandra"
let accountState;

console.log(accountId);


/*
prefer not to use var
because it bring issues in block scope and function scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
