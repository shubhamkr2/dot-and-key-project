const { Router } = require("express");
const {
  getUsers,
  loginUser,
  registerUser,
  getUserByID,
  updateUser,
  deleteUser,
} = require("../controlers/userController");
const { authenticate } = require("../middlewares/authMiddleware");

const userRoute = Router();

//to get users
userRoute.get("/", getUsers);
userRoute.get("/:id", getUserByID);

//to login a user
userRoute.post("/login", loginUser);

//to register a user
userRoute.post("/register", registerUser);

userRoute.put("/:id", authenticate, updateUser);
userRoute.delete("/:id", authenticate, deleteUser);

module.exports = { userRoute };
