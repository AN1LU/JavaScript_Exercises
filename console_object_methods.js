// Exercises level 1
// Day 13/30

//Showing output on browser console
console.log('30 Days of JavaScript')

console.warn('This is a warning')
console.error('this is an error message')
const names = ['Pelayo', 'Macias', 'Ana', 'Lucia']
console.table(names)

//It displays information message on browser console.
console.info('30 Days Of JavaScript challenge is trending on Github')

// Display the countries array as a table
const states = [
  ['Jalisco', 'Guadalajara'],
  ['Durango', 'Durango'],
  ['Sonora', 'Hermosillo'],
  ['Colima', 'Colima'],
  ['Veracruz', 'Xalapa'],
  ['Tabasco', 'Villahermosa'],
]
console.table(states)

// Display the countries object as a table
const states_capitals = new Map()
states_capitals.set('Jalisco', 'Guadalajara')
states_capitals.set('Durango', 'Durango')
states_capitals.set('Sonora', 'Hermosillo')

console.table(states_capitals)
