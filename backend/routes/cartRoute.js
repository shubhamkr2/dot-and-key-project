const { Router } = require("express");
const {
    getCartItems,
    getItemByID,
    addItems,
    updateItems,
    deleteItems,
} = require("../controlers/productController");

const cartRoute = Router();

cartRoute.get("/", getCartItems);
cartRoute.get("/:id", getItemByID);
cartRoute.post("/", addItems);
cartRoute.put("/:id", updateItems);
cartRoute.delete("/:id", deleteItems);

module.exports = { cartRoute };


