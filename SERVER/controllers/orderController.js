import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import Pizza from '../models/pizzaModel.js';

// @desc    send a new order
// @route   POST /api/orders/
// @access    private
export const sendOrder = asyncHandler(async (req, res) => {
  const orderedBy = req.user._id;
  const tempItems = await Pizza.find({ _id: req.body.item });

  const items = [];

  tempItems.map((item) => {
    items.push({
      id: item._id,
      price: item.price,
      ingredients: item.ingredients,
    });
  });

  const placeOrder = await Order.create({
    orderedBy,
    items: [...items],
  });

  res.status(201).json(placeOrder);
});

// @desc    all orders by active user
// @route   GET /api/orders/
// @access    private
export const orderHistory = asyncHandler(async (req, res) => {
  const listOfOrders = await Order.find({ orderedBy: req.user });
  res.status(200).send(listOfOrders);
});
