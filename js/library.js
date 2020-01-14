let myLibrary = [];

function Book(title, author, pages, readAlready) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readAlready = readAlready;
}

function addBookToLibrary() {
  let title = document.getElementById("book_title").value;
  let author = document.getElementById("book_author").value;
  let pages = parseInt(document.getElementById("pages").value)
  let readAlready = document.getElementsByName("readAlready")[0].checked;
  if(readAlready == true) {
    readAlready = "Read"
  } else {
    readAlready = "Not Read"
  }

  let newBook = new Book(title, author, pages, readAlready);
  myLibrary.push(newBook);
  render()
  document.getElementById('id01').style.display='none';
  document.getElementById('form').reset();
}

function render() {
  document.getElementById("books-list").innerHTML = '';
  myLibrary.forEach((book,index) => document.getElementById("books-list").innerHTML += `
   <div class="container>
      <ul>
        Title: <li id="title">${book.title}</li>
        By:<li id="author">${book.author}</li>
        No of Pages: <li id="pages">${book.pages}</li>
        Has <li id="read">${book.readAlready}</li>
        <button onclick="removeBookFromLibrary(this)" data-attributes = ${index} >Delete</button>
      </ul>
    </div>
        `
  )};

  function removeBookFromLibrary(book) {
    var bookToDelete = book.getAttribute("data-attributes");
    myLibrary.splice(bookToDelete, 1)
    render()
  }