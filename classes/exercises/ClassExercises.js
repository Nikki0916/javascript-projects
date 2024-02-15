// Define your Book class here:


class Book {
    constructor(title, author, copyrightDate, isbn, numPages, timesCheckedOut, discarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.numPages = numPages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
       super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
 
    dispose(currentYear){
       if (currentYear-this.copyright > 5) {
          this.discarded = 'Yes';
       }
    }
 }
 
 class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
       super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
 
    dispose(){
       if (this.timesCheckedOut > 100) {
          this.discarded = 'Yes';
       }
    }
 }


// Declare the objects for exercises 2 and 3 here:

let prideAndPrejudice = new Novel( 
    "Pride and Prejudice",
    "Jane Austen",
    1813,
    "1111111111111",
    432,
    32,
    false
);

let shuttleManual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, false
);



// Code exercises 4 & 5 here:

shuttleManual.dispose(); // Discard the manual
prideAndPrejudice.updateCheckedOut(); // Update the number of times Pride and Prejudice has been checked out

console.log(prideAndPrejudice);
console.log(shuttleManual);