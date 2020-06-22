class Author {

  constructor(name, age, books) {
    this.id = Author.count++ ;
    this.name = name;
    this.age = age;
    this.books = books || [];
  }
  getBookTitles(){
    let result = this.books.map((item) => item.title);
    return result;
  }
  addBook(book){
    this.books.push(book);
  }
  getInfo(){
    return `Author ${this.name}, born in ${new Date().getFullYear()-this.age} has
    published ${this.books.length} books with titles: ${this.getBookTitles()}`;
  }
}

Author.count = 10;

export {Author};
