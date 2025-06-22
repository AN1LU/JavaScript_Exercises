// Exercises: Level 1
// DAY 10/30

class person{
    constructor(name, gender){
        this.name = name, 
        this.gender = gender
    }
    sayHi(){
        console.log(`Hi, I'm ${this.name}`);
    }
}

class student extends person{
    constructor(name, degree_path){
        //super means: When a subclass extends a parent class, its constructor must call super() before accessing or modify this. ensures that the parent class's 
        //constructor is executed properly initializing any properties or settings defined in parent. 
        super(name);
        this.degree_path = degree_path;
    }

    study(){
        console.log(`${this.name} studies ${this.degree_path}`);
    }
}

let student1 = new student("Anilu", "Software Engineering")
student1.sayHi();
student1.study();