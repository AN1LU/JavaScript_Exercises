// Exercises: Level 1
// DAY 8/10

// Create an empty object called dog
let dog = {};

// Print the dog object to the console
console.log("Empty dog object:", dog);

// Add name, legs, color, age, and bark properties
dog.name = "Max";
dog.legs = 4;
dog.color = "brown";
dog.age = 3;
dog.bark = function() {
  return "woof woof";
};

// Get and print values from the dog object
console.log("Dog's name:", dog.name);
console.log("Dog's legs:", dog.legs);
console.log("Dog's color:", dog.color);
console.log("Dog's age:", dog.age);
console.log("Dog says:", dog.bark());

// Set new properties: breed and getDogInfo
dog.breed = "Labrador";
dog.getDogInfo = function() {
  return `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Breed: ${this.breed}`;
};

// Print full dog info
console.log("Dog info:", dog.getDogInfo());