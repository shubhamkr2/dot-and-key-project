const { CartModel } = require("../models/cartModel");

//to get all cart items
const getCartItems = async (req, res) => {
  try {
    let items = await CartModel.find(req.query);
    res.status(200).json({ data: items });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Items not found" });
  }
};

//to get item by ID
const getItemByID = async (req, res) => {
  let item = await CartModel.find({ _id: req.params.id });
  res.status(200).json({ data: item });
};

//to add product
const addItems = async (req, res) => {
  try {
    const product = new ProductModel(req.body);
    await product.save();
    res.status(201).json({ message: "Product added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Unable to add product" });
  }
};
module.exports = {};
