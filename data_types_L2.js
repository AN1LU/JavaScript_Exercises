//Exercises to master JavaScript
//DAY 2/30
// Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log('\'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another')

// Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let string = '10'
console.log(string == 10)

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num = '9.8'
let numFloat = parseFloat(num)
console.log(numFloat == 10)

// Check if 'on' is found in both python and jargon
let str1 = 'python'
let str2 = 'jargon'

console.log(str1.match('on'))
console.log(str2.match('on'))
// I hope this course is not full of jargon. Check if jargon is in the sentence.

// Generate a random number between 0 and 100 inclusively.
const number_0_100 = (Math.random() * 110)
console.log(number_0_100)

// Generate a random number between 50 and 100 inclusively.
const number_50_100 = (Math.random() * (100 - 50 + 1) + 1)
console.log(number_50_100)

// Generate a random number between 0 and 255 inclusively.
const number_0_255 = (Math.random() * (255+1))
console.log(number_0_255)

// Access the 'JavaScript' string characters using a random number.
let string1 = 'JavaScript'
const randomIndex = Math.floor(Math.random() * string1.length)
console.log(string1.charAt(randomIndex))

// Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125')
// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let newString = 'You cannot end a sentence with because because because is a conjunction'
let start = newString.indexOf("because because because");
let phrase = newString.substring(start, "because because because".length);
console.log(phrase);
