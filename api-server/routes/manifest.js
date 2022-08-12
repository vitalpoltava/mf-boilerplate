const express = require('express');
const router = express.Router();
const data = require('../data/manifest.json')
const books = require("../data/books.json");

router
  /* GET manifest */
  .get('/', function (req, res, next) {
    res.json(data);
  })
  /* POST manifest */
  .post('/', function (req, res, next) {
    data.manifest = req.body.manifest;
    res.json(data)
  });

module.exports = router;
