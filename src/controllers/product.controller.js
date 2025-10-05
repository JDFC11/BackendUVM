const productsDB = require("../database/products.db");

class ProductController {
  listar() {
    return new Promise((resolve, reject) => {
      resolve(productsDB);
    });
  }

  saludar() {
    return new Promise((resolve, reject) => {
      resolve("Hooola");
    });
  }
}

const productController = new ProductController();

module.exports = productController;
