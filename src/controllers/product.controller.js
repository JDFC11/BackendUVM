class ProductController {

  saludar() {
    return new Promise((resolve, reject) => {
      resolve("Hooola");
    });
  }
}

const productController = new ProductController();

module.exports = productController;