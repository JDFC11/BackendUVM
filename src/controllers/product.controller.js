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

  obtenerPorId(id) {
    return new Promise((resolve, reject) => {
      const producto = productsDB.find((p) => p.id === id);

      if (producto) {
        resolve(producto);
      } else {
        reject(`No se encontró ningún producto con el ID ${id}`);
      }
    });
  }

  actualizar(id, productData) {
    return new Promise((resolve, reject) => {
      if (!productData.nombre || !productData.precio) {
        return reject("Datos incompletos para la actualización.");
      }

      const index = productsDB.findIndex((p) => p.id === id);

      if (index !== -1) {
        productsDB[index].nombre = productData.nombre;
        productsDB[index].precio = productData.precio;
        resolve(productsDB[index]);
      } else {
        reject(
          `No se encontró ningún producto con el ID ${id} para actualizar.`
        );
      }
    });
  }

  eliminar(id) {
    return new Promise((resolve, reject) => {
      const index = productsDB.findIndex((p) => p.id === id);

      if (index !== -1) {
        const productoEliminado = productsDB.splice(index, 1);
        resolve(productoEliminado[0]);
      } else {
        reject(`No se encontró ningún producto con el ID ${id} para eliminar.`);
      }
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
