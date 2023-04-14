const { productModel } = require("../models/productModel");

const getProducts = (req, res) => {
  res.status(200).json({ message: "all product" });
};

const addProducts = (req, res) => {
  res.status(200).json({ message: "added product" });
};

const updateProducts = (req, res) => {
  res.status(200).json({ message: "updated product" });
};

const deleteProducts = (req, res) => {
  res.status(200).json({ message: "deleted product" });
};
module.exports = { getProducts, addProducts, updateProducts, deleteProducts };
