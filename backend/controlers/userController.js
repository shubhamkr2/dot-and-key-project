const { UserModel } = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//to get all users
const getUsers = async (req, res) => {
  let query = req.query;
  let users = await UserModel.find(query);
  res.status(200).json({ data: users });
};
//to get user by ID
const getUserByID = async (req, res) => {
  let params = req.params;
  let user = await UserModel.find(params);
  res.status(200).json({ data: user });
};
//to register
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await UserModel.findOne({ email });
  if (userExists) {
    res.status(400).json({ message: "user already exists" });
  }
  try {
    let hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({ name, email, password: hashedPassword });
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
    const user = await UserModel.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "User not exists" });
    } else {
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        res.status(400).json({ message: "Wrong password" });
      } else {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.status(200).json({
          name: user.name,
          email: user.email,
          token: token,
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getUsers, getUserByID, registerUser, loginUser };
