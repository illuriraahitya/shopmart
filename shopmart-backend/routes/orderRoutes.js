const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const { auth, admin } = require("../middleware/auth");

// Create order
router.post("/", auth, async (req, res) => {
  const { orderItems, totalPrice } = req.body;

  const order = new Order({
    user: req.user.userId,
    orderItems,
    totalPrice,
  });

  await order.save();
  res.status(201).json(order);
});

// User's own orders
router.get("/myorders", auth, async (req, res) => {
  const orders = await Order.find({ user: req.user.userId }).populate("orderItems.product");
  res.json(orders);
});

// Admin - all orders
router.get("/", auth, admin, async (req, res) => {
  const orders = await Order.find({})
    .populate("orderItems.product")
    .populate("user");
  res.json(orders);
});

// Admin - delete order
router.delete("/:id", auth, admin, async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }
  await order.deleteOne();
  res.json({ message: "Order deleted" });
});

module.exports = router;
