/* eslint-env browser */

let myLibrary = JSON.parse(window.localStorage.getItem('library'));
if (myLibrary == null) {
  myLibrary = [];
}

function Book(title, author, pages, readAlready) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readAlready = readAlready;
}

Book.prototype = {
  constructor: Book, // define the constructor property
  updateReadStatus() {
    if (this.readAlready === 'been read') {
      this.readAlready = 'not been read';
    } else {
      this.readAlready = 'been read';
    }
  },
};

myLibrary.forEach((book) => { Object.setPrototypeOf(book, Book.prototype); });

function render() {
  document.getElementById('books-list').innerHTML = '';
  myLibrary.forEach((book, index) => {
    document.getElementById('books-list').innerHTML += `

   <div class="col-12 col-md-3 col-lg-4">
      <ul>
        <li id="title"><b>Title</b>: ${book.title}</li>
        <li id="author"><b>By</b>: ${book.author}</li>
        <li id="pages"><b>No of Pages</b>: ${book.pages}</li>
        <li id="read"><b>Has</b> ${book.readAlready}</li>
        <button onclick="updateReadStatus(this)" data-attributes = ${index} >Update Read Status</button>
        <button onclick="removeBookFromLibrary(this)" data-attributes = ${index} >Delete</button>
      </ul>
    </div>`;
  });
}

function updateLocalStorage(array) {
  window.localStorage.setItem('library', JSON.stringify(array));
}

function addBookToLibrary() {
  const title = document.getElementById('book_title').value;
  const author = document.getElementById('book_author').value;
  const pages = parseInt(document.getElementById('pages').value, 16);
  let readAlready = document.getElementsByName('readAlready')[0].checked;
  if (readAlready === true) {
    readAlready = 'been read';
  } else {
    readAlready = 'not been read';
  }

  const newBook = new Book(title, author, pages, readAlready);
  myLibrary.push(newBook);
  updateLocalStorage(myLibrary);
  render();
  document.getElementById('id01').style.display = 'none';
  document.getElementById('form').reset();
}

function updateReadStatus(book) {
  const bookToUpdate = book.getAttribute('data-attributes');
  myLibrary[bookToUpdate].updateReadStatus();
  updateLocalStorage(myLibrary);
  render();
}

function removeBookFromLibrary(book) {
  const bookToDelete = book.getAttribute('data-attributes');
  myLibrary.splice(bookToDelete, 1);
  updateLocalStorage(myLibrary);
  render();
}
