var express = require("express");
var router = express.Router();

const productController = require("../controllers/product.controller");

router.get("/", function (req, res, next) {
  productController
    .listar()
    .then((productos) => {
      res.status(200).json({
        status: 200,
        data: productos,
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: 400,
        mensaje: error,
      });
    });
});

router.get("/saludar", function (req, res, next) {
  productController
    .saludar()
    .then((respuesta) => {
      res.status(200).json({
        status: 200,
        mensaje: respuesta,
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: 400,
        mensaje: error,
      });
    });
});

router.post("/", function (req, res, next) {
  const nuevoProductoData = req.body;

  productController
    .agregar(nuevoProductoData)
    .then((productoAgregado) => {
      res.status(201).json({
        status: 201,
        mensaje: "Producto agregado con éxito",
        producto: productoAgregado,
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: 400,
        mensaje: error,
      });
    });
});

router.get("/:id", function (req, res, next) {
  const productId = req.params.id;

  productController
    .obtenerPorId(productId)
    .then((producto) => {
      res.status(200).json({
        status: 200,
        data: producto,
      });
    })
    .catch((error) => {
      res.status(404).json({
        status: 404,
        mensaje: error,
      });
    });
});

router.put("/:id", function (req, res, next) {
  const productId = req.params.id;
  const productData = req.body;

  productController
    .actualizar(productId, productData)
    .then((productoActualizado) => {
      res.status(200).json({
        status: 200,
        mensaje: "Producto actualizado con éxito",
        producto: productoActualizado,
      });
    })
    .catch((error) => {
      res.status(404).json({
        status: 404,
        mensaje: error,
      });
    });
});

module.exports = router;
