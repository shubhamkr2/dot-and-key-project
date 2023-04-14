const { userModel } = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getProducts = (req, res) => {
  res.status(200).json({ message: "users" });
};



module.exports = { getUser, registerUser, loginUser };
