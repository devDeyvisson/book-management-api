const {
  createBook,
  getAllBooks,
  updateBookById,
  deleteBookById,
  getBookByTitle,
  getBookByAuthor,
  getBookByYear,
  getBookByGenre,
} = require("../repositories/bookRepository");

function createBookService(title, author, year, genre) {
  return createBook(title, author, year, genre);
}

function getAllBooksService() {
  return getAllBooks();
}

function updateBookByIdService(id, title, author, year, genre) {
  return updateBookById(id, title, author, year, genre);
}

function deleteBookByIdService(id) {
  return deleteBookById(id);
}

function getBookByTitleService(title) {
  return getBookByTitle(title);
}

function getBookByAuthorService(author) {
  return getBookByAuthor(author);
}

function getBookByYearService(year) {
  return getBookByYear(year);
}

function getBookByGenreService(genre) {
  return getBookByGenre(genre);
}

module.exports = {
  createBookService,
  getAllBooksService,
  updateBookByIdService,
  deleteBookByIdService,
  getBookByTitleService,
  getBookByAuthorService,
  getBookByYearService,
  getBookByGenreService,
};
