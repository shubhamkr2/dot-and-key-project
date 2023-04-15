const { Router } = require("express");
const {
  getUser,
  loginUser,
  registerUser,
} = require("../controlers/userController");

const userRoute = Router();

//to get all users
userRoute.get("/", getUser);
userRoute.get("/:_id", getUser);

//to login a user
userRoute.post("/login", loginUser);

//to register a user
userRoute.post("/register", registerUser);

module.exports = { userRoute };
