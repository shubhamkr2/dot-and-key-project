const { Router } = require("express");
const {
  getUsers,
  loginUser,
  registerUser,
  getUserByID,
  updateUser,
  deleteUser,
} = require("../controlers/userController");

const userRoute = Router();

//to get users
userRoute.get("/", getUsers);
userRoute.get("/:id", getUserByID);

//to login a user
userRoute.post("/login", loginUser);

//to register a user
userRoute.post("/register", registerUser);

userRoute.put("/:id", updateUser);
userRoute.delete("/:id", deleteUser);

module.exports = { userRoute };
