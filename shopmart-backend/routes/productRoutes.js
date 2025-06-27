const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const { auth, admin } = require("../middleware/auth");

// GET all products (users)
router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// GET single product
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});

// CREATE product (admin only)
router.post("/", auth, admin, async (req, res) => {
  const { name, description, price, countInStock, category } = req.body;

  const product = new Product({
    name,
    description,
    price,
    countInStock,
    category,
  });

  await product.save();
  res.status(201).json(product);
});

// UPDATE product (admin only)
router.put("/:id", auth, admin, async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  product.name = req.body.name || product.name;
  product.description = req.body.description || product.description;
  product.price = req.body.price || product.price;
  product.countInStock = req.body.countInStock || product.countInStock;
  product.category = req.body.category || product.category;

  await product.save();
  res.json(product);
});

// DELETE product (admin only)
router.delete("/:id", auth, admin, async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  await product.deleteOne();
  res.json({ message: "Product deleted" });
});

module.exports = router;
