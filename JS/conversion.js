let score = "39"
console.log(score)
console.log(typeof(score))

let value = Number(score) // Datatype conversion from string to number
console.log(value)
console.log(typeof(value))

let newValue = Number(undefined) // this is not a valid number then why it is giving NaN , you can convert but it is not giving the correct
console.log(newValue)
console.log(typeof(newValue))

/*
To Numbers 

"33"-> 33
"33abc"-> NaN
"true"-> 1
"false" -> 0
"NaN" -> NaN

To Boolean

"1" -> true
"0" -> false
"" -> false
"a" -> true
*/


let n = 1
let stringN = String(n)

console.log(stringN)
console.log(typeof stringN)