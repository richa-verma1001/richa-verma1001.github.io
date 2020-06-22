import {Book} from './js/Book.js';
import {Author} from './js/Author.js';
import {AuthorStore} from './js/AuthorStore.js';
import {BookStore} from './js/BookStore.js';

let authorStore = new AuthorStore();
let bookStore = new BookStore();

document.addEventListener('DOMContentLoaded', init);
function init() {
  function addListeners(event){
    let btn = document.getElementById('_addAuthor');
    btn.addEventListener('click', addAuthor );

    let btn2 = document.getElementById('_addBook');
    btn2.addEventListener('click', addBook );

    let listAuthorBtn = document.getElementById('_listAuthor');
    listAuthorBtn.addEventListener('click', showAuthors );

    let listBookBtn = document.getElementById('_listBooks');
    listBookBtn.addEventListener('click', showBooks );

    let clearAuthorsBtn = document.getElementById('_clearAuthorList');
    clearAuthorsBtn.addEventListener('click', clearDisplay.bind(this, 'userlist'));

    let clearBooksBtn = document.getElementById('_clearBookList');
    clearBooksBtn.addEventListener('click', clearDisplay.bind(this, 'booklist'));
  }

  function updateAuthorsMenu() {
    let selectItem = document.getElementById('_authorsMenu');
    selectItem.innerHTML = '';
    let authors = authorStore.getAuthors();
    authors.forEach(function(author){
      createAuthorSelect(author);
    });
  }

  function createAuthorSelect(author) {
    let option = document.createElement('option');
    let selectItem = document.getElementById('_authorsMenu');
    option.value = author.id;
    option.innerHTML = author.name;
    selectItem.appendChild(option);
  }

  function addAuthor() {
    let name = document.getElementById('_authorName').value;
    let age = document.getElementById('_authorAge').value;
    let author = new Author(name, age);
    authorStore.addAuthor(author);

    createAuthorNode(author);
    updateAuthorsMenu();
    document.getElementById('_authorName').value = '';
    document.getElementById('_authorAge').value = '';
  }

  function addBook() {
    let title = document.getElementById('_bookTitle').value;
    let published = document.getElementById('_yearPublished').value;
    let authorSelect = document.getElementById('_authorsMenu');
    let authorId = authorSelect.options[authorSelect.selectedIndex].value;
    let authorName = authorSelect.options[authorSelect.selectedIndex].text;
    let author = authorStore.getAuthor(authorId);
    let book = new Book(title,author, published);
    author.addBook(book);
    bookStore.addBook(book);
    createBookNode(book);
    document.getElementById('_bookTitle').value = '';
    document.getElementById('_yearPublished').value = '';

  }

  function getBookForAuthor(author){
    let books = author.books; // array of books for author
    showBooksForAuthor(books);
  }

  function showBooksForAuthor(books) {
    clearDisplay('booksForAuthorList');
    document.getElementById('booksForAuthorTitle').innerHTML =
      `Book written by ${books[0].author.name}`;
    books.forEach( (book) => {
        let elem = document.createElement('li');
        elem.innerHTML = `Title: ${book.title}, Published: ${book.published},
            ISBN: ${book.ISBN}`;
        document.getElementById('booksForAuthorList').appendChild(elem);
    });
  }

  function clearDisplay(clearElement){
    document.getElementById(clearElement).innerHTML = "";
  }

  function showAuthors() {
    clearDisplay('userlist');
    let authors = authorStore.getAuthors();
    authors.forEach(function(author){
      createAuthorNode(author);
    });
  }

  function createAuthorNode(author) {
    let authorElement = document.createElement('li');
    authorElement.id = author.id+'_li';
    authorElement.innerHTML = `${author.name}, ${author.age}`;

    let getBookLink = document.createElement('button');
    getBookLink.type = 'button';
    getBookLink.className = 'btn btn-link';
    getBookLink.id = author.id + '_btn';
    getBookLink.innerHTML = 'Get Books';
    authorElement.appendChild(getBookLink);
    getBookLink.author = author;
    document.getElementById('userlist').appendChild(authorElement);
    getBookLink.addEventListener('click', getBookForAuthor.bind(this, author));
  }

  function showBooks() {
    clearDisplay('booklist');
    let books = bookStore.getBooks();
    books.forEach(function(book){
      createBookNode(book);
    });
  }

  function createBookNode(book) {
    let bookElement = document.createElement('li');
    bookElement.innerHTML = `${book.title}, ${book.published}, ${book.author.name}`;
    document.getElementById('booklist').appendChild(bookElement);
  }
  addListeners();
}
