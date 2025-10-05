var express = require('express');
var router = express.Router();

const productController = require('../controllers/product.controller');


router.get('/', function(req, res, next) {
  productController.saludar()
    .then((respuesta) => {
      res.status(200).json({
        status: 200,
        mensaje: respuesta
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: 400,
        mensaje: error
      });
    });
});

module.exports = router;
