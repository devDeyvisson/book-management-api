const {
  createBook,
  getAllBooks,
  updateBookById,
  deleteBookById,
  getBookByTitle,
  getBookByAuthor,
  getBookByYear,
  getBookByGenre,
  findById,
} = require("../repositories/bookRepository");

function createBookService(title, author, year, genre) {
  let newBook = {
    id: Date.now().toString(),
    title: title,
    author: author,
    year: year,
    genre: genre,
  };

  return createBook(newBook);
}

function getAllBooksService() {
  return getAllBooks();
}

function updateBookByIdService(id, title, author, year, genre) {
  let bookFound = findById(id);

  if (!bookFound) return null;

  bookFound.title = title || bookFound.title;
  bookFound.author = author || bookFound.author;
  bookFound.year = year || bookFound.year;
  bookFound.genre = genre || bookFound.genre;

  return updateBookById(id, bookFound);
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
