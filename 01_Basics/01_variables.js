const accountId = 22 // Constant must not start from 0
let accountEmail = "vinay@google.com"
var accountPassword = "231"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed because Constant values can not be rewritten


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru" 

console.log(accountId);

/*
Prefer not to use var, because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])