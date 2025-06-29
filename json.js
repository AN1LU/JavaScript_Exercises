//Exercises to master JavaScript
//DAY 16/30

// Change skills array to JSON using JSON.stringify()
const user = {
  firstName: 'Ana Lucia',
  lastName: 'Pelayo',
  country: 'Mexico',
  city: 'Guadalajara',
  email: 'analuciapelayom@gmail.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'R', 'Python', 'C#', 'Java'],
  age: 22,
  isLoggedIn: false,
  points: 150
}

const txt = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age'],4)
console.log(txt)

