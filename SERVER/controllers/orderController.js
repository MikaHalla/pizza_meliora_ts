import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

// @desc    send a new order
// @route   POST /api/orders/
// @access    private
export const sendOrder = asyncHandler(async (req, res) => {
  const newOrder = await Order.create({
    orderedBy: req.body.name,
    item: req.body.item,
  });
  res.status(200).json(newOrder);
});

// @desc    all orders by active user
// @route   GET /api/orders/
// @access    private
export const orderHistory = asyncHandler(async (req, res) => {
  res.send('my order history');
});
