const { Router } = require("express");

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.status(200).json({ mesage: "users" });
});

userRouter.post("/login", (req, res) => {
  res.status(200).json({ mesage: "Success" });
});
userRouter.post("/register", (req, res) => {
  res.status(200).json({ mesage: "Success" });
});

module.exports = { userRouter };
