const { userModel } = require("../models/userModel");

const getUser = (req, res) => {
  res.status(200).json({ message: "users" });
};
const registerUser = async (req, res) => {
  let { name, email, password } = req.body;

  try {
    const user = new userModel({ name, email, password });
    await user.save();
    res.status(200).json({ message: "Success" });
  } catch (err) {
    console.log(err);
  }
};
const loginUser = (req, res) => {
  res.status(200).json({ message: "Success" });
};

module.exports = { getUser, registerUser, loginUser };
