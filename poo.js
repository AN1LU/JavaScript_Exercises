// Exercises: Level 1
// DAY 9/10

//Creating an object called button

let button = {
    //Attributes
    size: 'medium',
    color: 'red',
    typeOfAction: 'sendForms',

    //Methods
    clickIt: function() {
        console.log('Sending Forms information');
    }
};

let user = {
    name: 'Anilu',
    age: '22',
    degree: 'Software Engineer',
    gender: 'Female',

    sayHi: function(){
        console.log('Hola, soy '+ user.name);
    }
};

// call out object
user.sayHi();

function Animal(name, type){
    this.name = name,
    this.type = type,
    this.sound = function(){
        console.log(this.name + " makes a sound");
    };
}

let rooster = new Animal("Brat", "Rooster");
rooster.sound();

class Car{
    //Constructors are similar to attributes but instead of being for a specific object is more like a template for future usage
    constructor(brand, color, transmision, model, year){
        this.brand = brand;
        this.color = color;
        this.transmision = transmision;
        this.model = model;
        this.year = year;
    }

    //method
    turnOn(){
        console.log(`Vehicle ${this.brand} ${this.model} ${this.year} was turned on`);
    }
}

let myCar = new Car("Toyota", "Red", "Automatic", "Tacoma", "2026")
myCar.turnOn();