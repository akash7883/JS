// const variables once assigned it's value can't be changes
const accountId = 126
console.log(accountId)
// accountId=123 this will give error becuase we are trying to reassign it


let accountEmail = "akash.porwal@github.com" 
var acccountPassword = "Akash@github"  // not recommended
accountCity = "Auraiya" // not recommended 
let accountState // if we declare and didn't assign then it give undefined

/*
We should use let instead of var
because var doesn't follow scope logic so we don't use it
*/

accountEmail = "changed@github.com"
acccountPassword = 123
accountCity = "AU"

console.table([accountState,accountEmail,acccountPassword,accountCity])
