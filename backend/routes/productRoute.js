const { Router } = require("express");
const {
  getProducts,
  addProducts,
  updateProducts,
  deleteProducts,
} = require("../controlers/productController");

const productRoute = Router();

productRoute.get("/", getProducts);

module.exports = { productRoute };
