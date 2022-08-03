const express = require('express');
const router = express.Router();
const books = require('../data/books.json')

/* GET books listing. */
router
  .get('/', function (req, res, next) {
    res.json(books.results);
  })
  .get('/:id', function (req, res, next) {
    const id = parseInt(req.params["id"]);
    const booksList = books.results;

    res.json(booksList.find((book) => book.id === id));
  });


module.exports = router;
