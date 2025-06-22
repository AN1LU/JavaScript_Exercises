// Exercises: Level 1
// DAY 11/30

class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class Library{
    constructor(){
        this.Books = [];
    }
    
    addBook(Book){
        //push is used to add one or more elements at the end of the array
        this.Books.push(Book)
    }

    listBooks(){
        this.Books.forEach(Book => {
            console.log(`${Book.title} by ${Book.author}`);
        });
    }
}

let myLibrary = new Library();

myLibrary.addBook(new Book("1984","George Orwell", "2012"));
myLibrary.addBook(new Book("Tiene la noche un arbol", "Guadalaupe Dueñas", "2023"))

myLibrary.listBooks();