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

//to get a item by ID
const getItemByID = async (req, res) => {
  try {
    let item = await CartModel.find({ _id: req.params.id });
    res.status(200).json({ data: item });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Items not found" });
  }
};

//to add a item to cart
const addItem = async (req, res) => {
  try {
    const item = new CartModel(req.body);
    await item.save();
    res.status(201).json({ message: "Item added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Unable to add item" });
  }
};

//to update a item
const updateItem = async (req, res) => {
  try {
    await CartModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).json({ message: "updated item" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Unable to update the item" });
  }
};

//to delete a item
const deleteItem = async (req, res) => {
  try {
    await CartModel.findByIdAndRemove({ _id: req.params.id });
    res.status(200).json({ message: "deleted item" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Unable to update the item" });
  }
};
module.exports = {
  getCartItems,
  getItemByID,
  addItem,
  updateItem,
  deleteItem,
};
