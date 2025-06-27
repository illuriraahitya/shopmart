const Order = require('../models/Order');

// Create order
exports.createOrder = async (req, res) => {
  try {
    const { items, totalPrice } = req.body;

    const order = await Order.create({
      user: req.user._id,
      items,
      totalPrice,
    });

    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ message: 'Error creating order', error: err });
  }
};

// Get logged-in user's orders
exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate('items.product');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching orders', error: err });
  }
};

// Admin: Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user').populate('items.product');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching all orders', error: err });
  }
};

// Admin: Update order status
exports.updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(order);
  } catch (err) {
    res.status(400).json({ message: 'Error updating status', error: err });
  }
};
