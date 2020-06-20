class Book {

  constructor(title, author, published) {
    this.ISBN = Book.id++;
    this.title = title;
    this.author = author;
    this.published = published;
  }

  getISBN() {
    return this.ISBN;
  }
  getAuthor(){
    return this.author;
  }
  getTitle(){
    return this.title;
  }
  getPublished(){
    return this.published;
  }
  setPublished(published){
    this.published = published;
  }
  getInfo() {
    return `Book ${this.title} written by ${this.author} was published in
     ${this.published}`;
  }
}

Book.id = 100;

export {Book};
