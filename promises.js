//Exercises to master JavaScript
//DAY 18/30

//Callback
// const doSomething = callback => {
//   setTimeout(() => {
//     const skills = ['HTML', 'CSS', 'JS']
//     callback('It did not go well', skills)
//   }, 2000)
// }

// const callback = (err, result) => {
//   if (err) {
//     return console.log(err)
//   }
//   return console.log(result)
// }

// doSomething(callback)

const url = 'https://api.countrylayer.com/v2/all' // countries api
const access_key = 'f45309ae7b821c05da55d8d09c852011'
fetch(url + '?access_key=' + access_key) // fetching the API data
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    data.forEach(country => {
      console.log(`Country: ${country.name}, Capital: ${country.capital}, Population: ${country.population}, Area: ${country.area} km²`)
    })
  })
  .catch(error => console.error(error)) // handling error if something wrong happens

  
// const countriesAPI = 'https://restcountries.com/v2/all'
// const catsAPI = 'https://api.thecatapi.com/v1/breeds'