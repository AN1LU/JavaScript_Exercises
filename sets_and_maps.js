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
// Create a map of countries and number of characters of a country