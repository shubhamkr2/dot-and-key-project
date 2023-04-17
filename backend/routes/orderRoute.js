

const { Router } = require("express");
const {
    getCartItems,
    getItemByID,
    addItems,
    updateItems,
    deleteItems,
} = require("../controlers/orderController");

const orderRoute = Router();

orderRoute.get("/", getCartItems);
orderRoute.get("/:id", getItemByID);
orderRoute.post("/", addItems);
orderRoute.put("/:id", updateItems);
orderRoute.delete("/:id", deleteItems);

module.exports = { orderRoute };


