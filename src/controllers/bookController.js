const {
  createBookService,
  getAllBooksService,
  updateBookByIdService,
  deleteBookByIdService,
  getBookByTitleService,
  getBookByAuthorService,
  getBookByYearService,
  getBookByGenreService,
} = require("../services/bookService");

function createBookController(request, response) {
  try {
    const { title, author, year, genre } = request.body;

    if (!title || !author || !year || !genre) {
      return response.status(400).json({ message: "All fields are required." });
    }

    let newBook = createBookService(title, author, year, genre);

    return response.status(201).json(newBook);
  } catch (error) {
    return response.status(500).json({ message: "Error creating book." });
  }
}

function getAllBooksController(request, response) {
  try {
    let books = getAllBooksService();
    return response.status(200).json(books);
  } catch (error) {
    return response.status(500).json({ message: "Error listing all books." });
  }
}

function updateBookByIdController(request, response) {
  try {
    const { id } = request.params;

    if (!id) {
      return response.status(400).json({ message: "The id is required." });
    }

    const { title, author, year, genre } = request.body;

    let updatedBook = updateBookByIdService(id, title, author, year, genre);

    if (!updatedBook) {
      return response.status(404).json({ message: "Book not found." });
    }

    return response.status(200).json(updatedBook);
  } catch (error) {
    return response.status(500).json({ message: "Error updating book." });
  }
}

function deleteBookByIdController(request, response) {
  try {
    const { id } = request.params;

    if (!id) {
      return response.status(400).json({ message: "The id is required." });
    }

    let deletedBook = deleteBookByIdService(id);

    if (!deletedBook) {
      return response.status(404).json({ message: "Book not found." });
    }

    return response.status(204).end();
  } catch (error) {
    return response.status(500).json({ message: "Error deleting book." });
  }
}

function searchBookController(request, response) {
  try {
    const { title, author, year, genre } = request.query;

    if (title) {
      return response.status(200).json(getBookByTitleService(title));
    }

    if (author) {
      return response.status(200).json(getBookByAuthorService(author));
    }

    if (year) {
      return response.status(200).json(getBookByYearService(year));
    }

    if (genre) {
      return response.status(200).json(getBookByGenreService(genre));
    }

    return response
      .status(400)
      .json({ message: "No search parameters were valid." });
  } catch (error) {
    return response.status(500).json({ message: "Error searching books." });
  }
}

module.exports = {
  createBookController,
  getAllBooksController,
  updateBookByIdController,
  deleteBookByIdController,
  searchBookController,
};
