const db = require("../database/memoryDataBase");

function createBook(book) {
  db.books.push(book);

  return book;
}

function getAllBooks() {
  return db.books;
}

function updateBookById(id, book) {
  let index = db.books.findIndex((book) => book.id == id);

  if (index === -1) return null;

  db.books[index] = book;

  return book;
}

function findById(id) {
  const bookFound = db.books.find((book) => book.id == id);

  if (!bookFound) return null;

  return bookFound;
}

function deleteBookById(id) {
  let index = db.books.findIndex((book) => book.id == id);

  if (index === -1) return false;

  db.books.splice(index, 1);

  return true;
}

function getBookByTitle(title) {
  let selectedBooks = db.books.filter((book) =>
    book.title.toLowerCase().includes(title.toLowerCase())
  );

  return selectedBooks;
}

function getBookByAuthor(author) {
  let selectedBooks = db.books.filter((book) =>
    book.author.toLowerCase().includes(author.toLowerCase())
  );

  return selectedBooks;
}

function getBookByYear(year) {
  let selectedBooks = db.books.filter((book) => book.year == year);

  return selectedBooks;
}

function getBookByGenre(genre) {
  let selectedBooks = db.books.filter((book) =>
    book.genre.toLowerCase().includes(genre.toLowerCase())
  );

  return selectedBooks;
}

module.exports = {
  createBook,
  getAllBooks,
  updateBookById,
  deleteBookById,
  getBookByTitle,
  getBookByAuthor,
  getBookByYear,
  getBookByGenre,
  findById,
};
