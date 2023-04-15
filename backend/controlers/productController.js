const { ProductModel } = require("../models/productModel");

//to get all products
const getProducts = async (req, res) => {
  let query = req.query;
  let product = await ProductModel.find(query);
  res.status(200).json({ data: product });
};
//to get product by ID
const getProductByID = async (req, res) => {
  let params = req.params;
  let product = await ProductModel.find(params);
  res.status(200).json({ data: product });
};
//to add product
const addProducts = async (req, res) => {
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
    res.status(500).json({ message: "Unable to add product" });
  }
};

const updateProducts = (req, res) => {
  res.status(200).json({ message: "updated product" });
};

const deleteProducts = (req, res) => {
  res.status(200).json({ message: "deleted product" });
};
module.exports = {
  getProducts,
  getProductByID,
  addProducts,
  updateProducts,
  deleteProducts,
};
