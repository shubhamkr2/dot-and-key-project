const { Router } = require("express");
const {
  getUser,
  loginUser,
  registerUser,
} = require("../controlers/userController");

const userRouter = Router();

//to get all users
userRouter.get("/", getUser);

//to login a user
userRouter.post("/login", loginUser);

//to register a user
userRouter.post("/register", registerUser);

module.exports = { userRouter };
