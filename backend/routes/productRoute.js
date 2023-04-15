const { Router } = require("express");
const {
  getProducts,
  addProducts,
  updateProducts,
  deleteProducts,
  getProductByID,
} = require("../controlers/productController");

const productRoute = Router();

productRoute.get("/", getProducts);
productRoute.get("/:_id", getProductByID);
productRoute.post("/", addProducts);
productRoute.put("/:id", updateProducts);
productRoute.delete("/:id", deleteProducts);

module.exports = { productRoute };
