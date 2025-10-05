var express = require('express');
var router = express.Router();

/* GET users listing.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

/* GET users listing. */
router.get('/', function(req, res, next) {
  return res.status(201).json({
    status: 201,
    mensaje: 'Hola bro'
  });
});

module.exports = router;
