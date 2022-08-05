const express = require('express');
const router = express.Router();

/* POST form */
router.post('/', function(req, res, next) {
  res.json(req.body)
});

module.exports = router;
