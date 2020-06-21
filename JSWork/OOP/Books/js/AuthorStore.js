class AuthorStore {
  getAuthor(id) {
    return AuthorStore.authors[id];
  }
  addAuthor(author) {
    AuthorStore.authors[author.id] = author;
  }
  getAuthors() {
    return AuthorStore.authors;
  }
}
AuthorStore.authors = [];

export {AuthorStore};
