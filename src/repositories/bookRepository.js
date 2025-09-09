const db = require("../database/memoryDataBase");

function createBook(title, author, year, genre) {
  let newBook = {
    id: Date.now().toString(),
    title: title,
    author: author,
    year: year,
    genre: genre,
  };

  db.books.push(newBook);

  return newBook;
}

function getAllBooks() {
  return db.books;
}

function updateBookById(id, title, author, year, genre) {
  let index = db.books.findIndex((book) => book.id == id);

  if (index === -1) return false;

  db.books[index].title = title || db.books[index].title;
  db.books[index].author = author || db.books[index].author;
  db.books[index].year = year || db.books[index].year;
  db.books[index].genre = genre || db.books[index].genre;

  return db.books[index];
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
};
