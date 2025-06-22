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

user.sayHi();
