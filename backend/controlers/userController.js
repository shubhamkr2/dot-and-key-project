const { userModel } = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const getUser = (req, res) => {
  res.status(200).json({ message: "users" });
};

//to register
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await userModel.findOne({ email });
  if (userExists) {
    res.status(400).json({ message: "user already exists" });
  }
  try {
    let hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User Registered successfully" });
  } catch (err) {
    console.log(err);
  }
};

//to login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "User not exists" });
    } else {
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
          res.status(400).json({ message: "Wrong password" });
        } else {
            const token = jwt.sign({ id:user._id }, process.env.JWT_SECRET);
          res.status(200).json({ message: "User logged in successfully", token: token });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getUser, registerUser, loginUser };
