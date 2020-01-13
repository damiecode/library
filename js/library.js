let myLibrary = ["hello"];

function Book(title, author, pages, readAlready) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readAlready = readAlready;
}

function addBookToLibrary() {
  let title = document.getElementById("book_title").value;
  let author = document.getElementById("book_author").value;
  let pages = document.getElementById("pages").value;
  let readAlready = document.getElementsByName("readAlready").value;

  let newBook = new Book(title, author, pages, readAlready);
  myLibrary.push(newBook);
  console.log(myLibrary);
}

function getBooks(){
  console.log(myLibrary);
}