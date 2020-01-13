let myLibrary = [];

function Book(title, author, pages, readAlready) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readAlready = readAlready;
}

function addBookToLibrary() {
  /*let form = document.forms["newBookForm"];*/

  let title = document.getElementById("book_title").value;
  let author = document.getElementById("book_author").value;
  let pages = document.getElementById("pages").value;
  let readAlready = document.getElementById("readAlready").value;

  let newBook = new Book(title, author, pages, readAlready);
  myLibrary.push(newBook);
}