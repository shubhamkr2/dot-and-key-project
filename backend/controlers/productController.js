const { ProductModel } = require("../models/productModel");

const getProducts = async (req, res) => {
  const { category, title, description, price, image } = req.body;
  try {
    const product = new ProductModel({
      category,
      title,
      description,
      price,
      image,
    });
    await product.save();
    res.status(201).json({ message: "Product added successfully" });
  } catch (err) {
    console.log(err);
  }
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
