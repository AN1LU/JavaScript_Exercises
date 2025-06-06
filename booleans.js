//Exercises to master JavaScript
//DAY 3/30

// Declare firstName, lastName, country, city, age, isMarried, year variable 
//  assign value to it and use the typeof operator 
//  check different data types.
let firstName = 'Ana Lucia'
let lastName = 'Pelayo'
let country = 'Mexico'
let city = 'Guadalajara'
let age = '22'
let isMarried = false
let year = 2025

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

// Check if type of '10' is equal to 10
let tenStr = '10'
let tenNum = 10
console.log(typeof tenStr == tenNum)

// Check if parseInt('9.8') is equal to 10
let number = '9.8'

console.log(parseInt(number)== 10)
// Boolean value is either true or false.
const booleano1 = true
const booleano2 = false

console.log(booleano1)
console.log(booleano2)

// Write three JavaScript statement which provide truthy value.
const check = 4 < 3 || 13 > 5
console.log(check) //Pipe OR operator
const check1 = 4 > 3 && 10 > 5
console.log(check1) //Ampersand AND operator
const check2 = 16<1677
console.log(check2)

// Write three JavaScript statement which provide falsy value.
const check3 = 4 < 3 || 13 < 5
console.log(check3) //Pipe OR operator
const check4 = 4 < 3 && 10 < 5
console.log(check4) //Ampersand AND operator
const check5 = 16 > 1677
console.log(check5)

// Figure out the result of the following comparison expression first without using console.log(). 
// After you decide the result confirm it using console.log()

// 4 > 3    -> True
// 4 >= 3   -> True
// 4 < 3    -> False
// 4 <= 3   -> False
// 4 == 4   -> True
// 4 === 4  -> True Compares value and datatype
// 4 != 4   -> False
// 4 !== 4  -> False
// 4 != '4' -> False
// 4 == '4' -> True
// 4 === '4'-> False
// Find the length of python and jargon and make a falsy comparison statement.

// python -> 6
// jargon -> 6
// 6 > 6
let str3 = 'python'
let str4 = 'jargon'
console.log('jargon and python')
console.log((str3.length) != (str4.length))

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

// Figure out the result of the following expressions first without using console.log(). 
// After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12 -> True
// 4 > 3 && 10 > 12 -> False
// 4 > 3 || 10 < 12 -> True
// 4 > 3 || 10 > 12 -> True
// !(4 > 3) -> False
// !(4 < 3) -> True
// !(false) -> True
// !(4 > 3 && 10 < 12)  -> False
// !(4 > 3 && 10 > 12)  -> True
// !(4 === '4')         -> True
console.log('operator 2 Check Responses')
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4') )

// There is no 'on' in both dragon and python


// Use the Date object to do the following activities

// What is the year today?
const now = new Date()
console.log(now.getFullYear())
// What is the month today as a number?
console.log(now.getMonth())
// What is the date today?
console.log(now)
// What is the day today as a number?
console.log(now.getDate())
// What is the hours now?
console.log(now.getHours())
// What is the minutes now?
console.log(now.getMinutes())
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime())
