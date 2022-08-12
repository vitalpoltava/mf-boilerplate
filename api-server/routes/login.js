const express = require('express');
const router = express.Router();

const makeToken = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}


/* POST form */
router.post('/', function(req, res, next) {
  res.json({...req.body, authToken: makeToken(32)})
});

module.exports = router;
