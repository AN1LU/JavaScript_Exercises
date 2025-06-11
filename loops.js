//Exercises to master JavaScript
//DAY 6/30

// {
// --------------------------------------------
// For loop structure


// for(initialization, condition, increment/decrement){
//   // code goes here
// }
// --------------------------------------------
// While loop structure

// let i = 0
// while (i <= 5) {
//   console.log(i)
//   i++
// }

// 0 1 2 3 4 5


// --------------------------------------------
//Do while
// let i = 0
// do {
//   console.log(i)
//   i++
// } while (i <= 5)
// --------------------------------------------
//For of 
// We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array.

// for (const element of arr) {
//   // code goes here
// }

// --------------------------------------------
//Continue 
//This is used to skip certain iterations
//}
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
//1. Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++){
    console.log('for '+i)
}

let i = 0
while(i<=10){
    console.log('while '+ i)
    i++
}
i = 0
do{
    console.log('do while '+i)
    i++
}while (i<=10)
//2. Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 0; i--){
    console.log('for '+i)
}

i = 10
while(i>=0){
    console.log('while '+ i)
    i--
}
i = 10
do{
    console.log('do while '+i)
    i--
}while (i>=0)
// Iterate 0 to n using for loop
// let n = window.prompt('Ingrese el numero maximo del for:')
// for (let i = 0; i >= n; i++){
//     console.log('for '+i)
// }

// Write a loop that makes the following pattern using console.log():

//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
let string = '#'
for (i = 0 ; i<=7 ; i++){
    console.log(string.repeat(i))
}
// Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
// Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
// Use for loop to iterate from 0 to 100 and print only even numbers
for(i=0; i<=100; i++){
    if(i%2==0){
        console.log(i)
    }
}
// Use for loop to iterate from 0 to 100 and print only odd numbers
for(i=0; i<=100; i++){
    if(i%2!=0){
        console.log(i)
    }
}
// Use for loop to iterate from 0 to 100 and print only prime numbers

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// The sum of all numbers from 0 to 100 is 5050.
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

//   [2550, 2500]
// Develop a small script which generate array of 5 random numbers

// Develop a small script which generate array of 5 random numbers and the numbers must be unique

// Develop a small script which generate a six characters random id:

// 5j2khz