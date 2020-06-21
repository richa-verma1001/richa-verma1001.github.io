class BookStore {
  addBook(book) {
    BookStore.books[book.ISBN] = book;
  }
  getBook(ISBN) {
    return BookStore.book[ISBN];
  }
  getBooks(){
    return BookStore.books;
  }
}
BookStore.books = [];

export {BookStore};
