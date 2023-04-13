const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Home");
});

app.listen(process.env.PORT, () => {
  console.log(`Express server listening on PORT ${process.env.PORT}`);
});
