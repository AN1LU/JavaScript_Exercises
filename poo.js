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


