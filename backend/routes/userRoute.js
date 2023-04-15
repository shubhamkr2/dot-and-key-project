const { Router } = require("express");
const {
  getUsers,
  loginUser,
  registerUser,
  getUserByID,
} = require("../controlers/userController");

const userRoute = Router();

//to get all users
userRoute.get("/", getUsers);
userRoute.get("/:_id", getUserByID);

//to login a user
userRoute.post("/login", loginUser);

//to register a user
userRoute.post("/register", registerUser);

module.exports = { userRoute };
