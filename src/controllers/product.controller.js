const productsDB = require("../database/products.db");
const { v4: uuidv4 } = require("uuid");

class ProductController {
  agregar(product) {
    return new Promise((resolve, reject) => {
      if (!product.nombre || !product.precio) {
        return reject("Datos incompletos. Se necesita 'nombre' y 'precio'.");
      }

      const nuevoProducto = {
        id: uuidv4(),
        nombre: product.nombre,
        precio: product.precio,
        fechaCreacion: new Date(),
      };

      productsDB.push(nuevoProducto);

      resolve(nuevoProducto);
    });
  }

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
