//Exercises to master JavaScript
//DAY 4/30

//1.
//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'
// You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = window.prompt('how old are you?')
console.log('Let me see in my system......')
console.log('You are ' + age + " years old")

if (age >= 18){
    console.log('You are old enough to drive')
}
else{
    drive = 18 - age
    console.log('You are left with ' + drive + ' to drive')
}
//2.
// Compare the values of myAge and yourAge using if … else. Based on the comparison and log 
// the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// let myAge = 22
// console.log("I'm "+ myAge + " years old")
// let yourAge = window.prompt("Enter your age:")
// if(yourAge>myAge){
//     older = yourAge - myAge
// console.log("You are "+older + ' years older than me.')
// }
// else if(myAge>yourAge){
//     older = myAge - yourAge
// console.log("I'm "+ older + " years older than you")
// }

// Enter your age: 30
// You are 5 years older than me.

//3.
// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else
// ternary operator.
//   let a = 4
//   let b = 3
//   4 is greater than 3
let a = window.prompt('Enter a:')
let b = window.prompt('Enter b:')
if(a>b){
    isGreaterThan = true
}else{
    isGreaterThan = false
}

isGreaterThan 
    ? console.log('A is greater than B')
    : console.log('B is greater than A')

//4.
// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = window.prompt('Enter your number')

let module = 0

module = number%2

switch(module){
    case 0: 
        console.log("Your number is an even number")
        break
    case 1:
        console.log('Your number is an odd number')
        break
}
// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.
