//Exercises to master JavaScript
//DAY 21/30

// Create an index.html file and 
// put four p elements as above: 

// 1. Get the first paragraph by using document.querySelector(tagname) and tag name
const allTitles = document.getElementsByTagName('h1')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}
// 2. Get each of the the paragraph using document.querySelector('#id') and by their id
// 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
// 4. Loop through the nodeList and get the text content of each paragraph
// 
// Set a text content to paragraph the fourth paragraph,Fourth Paragraph
// Set id and class attribute for all the paragraphs using different attribute setting methods