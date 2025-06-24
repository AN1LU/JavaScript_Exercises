// Exercises level 1
// Day 12/30

// create an empty set
const emptySet = new Set()

console.log(emptySet.size)
// Create a set containing 0 to 10 using loop
const setZeroToTen = new Set()

for(i = 0; i<=10; i++){
    setZeroToTen.add(i)
}

console.log(setZeroToTen)
// Remove an element from a set

console.log(setZeroToTen.delete(5))
console.log(setZeroToTen)
// Clear a set
setZeroToTen.clear()
console.log(setZeroToTen)
// Create a set of 5 string elements from array
const mexicoStates = [
    'Jalisco',
    'Durango',
    'Puebla',
    'Queretaro',
    'Michoacan',
]

const setOfStates = new Set(mexicoStates)
console.log(setOfStates)

// Create a map of countries and number of characters of a country

//For an empty map
const map = new Map()
console.log(map)

const countriesMap = new Map()

console.log(countriesMap.size) // should be empty .. 0

countriesMap.set('MEX', '3')
countriesMap.set('US', '2')
countriesMap.set('CA', '2')
countriesMap.set('ESP', '3')

console.log(countriesMap)
console.log(countriesMap.size)