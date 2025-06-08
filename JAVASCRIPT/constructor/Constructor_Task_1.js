/*  Task 1: Basic Constructor
Create a constructor called Book

It should accept title and author.

Create two different book objects and print their titles.

 */

function Book(title,author){
    this.title=title;
    this.author=author;
}

let book1=new Book('To kill a Mockingbird','Harper Lee');
let book2=new Book('1984','George Orwell');

console.log(book1.title);
console.log(book2.title);