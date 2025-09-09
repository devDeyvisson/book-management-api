const express = require("express");

const {
  createBookController,
  getAllBooksController,
  updateBookByIdController,
  deleteBookByIdController,
  searchBookController,
} = require("../controllers/bookController");

const router = express.Router();

router.post("/books", createBookController);
router.get("/books", getAllBooksController);
router.put("/books/:id", updateBookByIdController);
router.delete("/books/:id", deleteBookByIdController);

router.get("/books/search", searchBookController);

module.exports = router;
