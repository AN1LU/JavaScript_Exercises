
//Exercises to master JavaScript
//DAY 5/30

// Declare an empty array;

let arr = []
console.log(arr)

// Declare an array with more than 5 number of elements
let arrayWithNumbers = [0,2,1,2,6,4,5]
// Find the length of your array
console.log(arrayWithNumbers.length)
// Get the first item, the middle item and the last item of the array
console.log(arrayWithNumbers[0]+ '\tFirst item')
console.log(arrayWithNumbers[3]+ '\tMiddle item')
console.log(arrayWithNumbers[6]+ '\tLast item')

// Declare an array called mixedDataTypes, put different data types in the array and 
// find the length of the array. The array size should be greater than 5
let mixedDataTypes = ['This is a string', 0, 1.678, false, 'Yes', true]
console.log(mixedDataTypes.length)
if(mixedDataTypes.length>5){
    console.log('This array is greater than 5')
}else{
    console.log('This array isn\'t greater than 5')
}

// Declare an array variable name itCompanies and assign initial values 
// Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// Print the array using console.log()
console.log(itCompanies)
// Print the number of companies in the array
console.log(itCompanies.length)
// Print the first company, middle and last company
console.log('First company: '+itCompanies[0])
console.log('Middle company: '+itCompanies[3])
console.log('Last company: '+itCompanies[6])
// Print out each company
console.log('Company 1: '+itCompanies[0])
console.log('Company 2: '+itCompanies[1])
console.log('Company 3: '+itCompanies[2])
console.log('Company 4: '+itCompanies[3])
console.log('Company 5: '+itCompanies[4])
console.log('Company 6: '+itCompanies[5])
console.log('Company 7: '+itCompanies[6])

// Change each company name to uppercase one by one and print them out
console.log('Company 1: '+itCompanies[0].toUpperCase())
console.log('Company 2: '+itCompanies[1].toUpperCase())
console.log('Company 3: '+itCompanies[2].toUpperCase())
console.log('Company 4: '+itCompanies[3].toUpperCase())
console.log('Company 5: '+itCompanies[4].toUpperCase())
console.log('Company 6: '+itCompanies[5].toUpperCase())
console.log('Company 7: '+itCompanies[6].toUpperCase())
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies[0]+', '+itCompanies[1]+','+itCompanies[2]+', '+itCompanies[3]+', '+itCompanies[4]+', '+itCompanies[5]+', '+itCompanies[6])
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// let certainCompany = window.prompt('Enter the name of a company: ')

// switch (itCompanies){
//     case itCompanies[0]:
//         console.log('Your company is in my system. Company:' + itCompanies[0])
//         break
//     case itCompanies[1]:
//         console.log('Your company is in my system. Company:' + itCompanies[1])
//         break
//     case itCompanies[2]:
//         console.log('Your company is in my system. Company:' + itCompanies[2])
//         break
//     case itCompanies[3]:
//         console.log('Your company is in my system. Company:' + itCompanies[3])
//         break
//     case itCompanies[4]:
//         console.log('Your company is in my system. Company:' + itCompanies[4])
//         break
//     case itCompanies[5]:
//         console.log('Your company is in my system. Company:' + itCompanies[5])
//         break
//     case itCompanies[6]:
//         console.log('Your company is in my system. Company:' + itCompanies[6])
//         break
// }

// Filter out companies which have more than one 'o' without the filter method
switch (itCompanies){
    case itCompanies[0]:
        count = itCompanies[0].split('o').length-1
        if(count > 1){
            console.log(itCompanies[0])
        }
        break
    case itCompanies[1]:
        count = itCompanies[1].split('o').length-1
        if(count > 1){
            console.log(itCompanies[1])
        }
        break
    case itCompanies[2]:
        count = itCompanies[2].split('o').length-1
        if(count > 1){
            console.log(itCompanies[2])
        }
        break
    case itCompanies[3]:
        count = itCompanies[3].split('o').length-1
        if(count > 1){
            console.log(itCompanies[3])
        }
        break
    case itCompanies[4]:
        count = itCompanies[4].split('o').length-1
        if(count > 1){
            console.log(itCompanies[4])
        }
        break
    case itCompanies[5]:
        count = itCompanies[5].split('o').length-1
        if(count > 1){
            console.log(itCompanies[5])
        }
        break
    case itCompanies[6]:
        count = itCompanies[6].split('o').length-1
        if(count > 1){
            console.log(itCompanies[6])
        }
        break
}

// // Sort the array using sort() method
console.log(itCompanies.sort())
// Reverse the array using reverse() method
console.log(itCompanies.reverse())
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3))
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(4,7))
// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3,4))
// Remove the first IT company from the array
console.log(itCompanies.shift(0))
// Remove the middle IT company or companies from the array
console.log(itCompanies.shift(4))
// Remove the last IT company from the array
console.log(itCompanies.shift(7))
// Remove all IT companies
itCompanies.pop()
itCompanies.pop()
itCompanies.pop()
itCompanies.pop()
itCompanies.pop()
console.log(itCompanies)