import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import Pizza from '../models/pizzaModel.js';

// @desc    send a new order
// @route   POST /api/orders/
// @access    private
export const sendOrder = asyncHandler(async (req, res) => {
  const orderedBy = req.user._id;
  const completeOrder = JSON.parse(req.body.order);

  const simplifiedOrder = [];

  completeOrder.map((item) => {
    simplifiedOrder.push({
      id: item._id,
      price: item.price,
      customIngredients: item.customIngredients,
      removedIngredients: item.removedIngredients,
    });
  });

  const newOrder = await Order.create({
    orderedBy,
    items: [...simplifiedOrder],
  });

  res.status(200).json(newOrder);
});

// @desc    all orders by active user
// @route   GET /api/orders/
// @access    private
export const orderHistory = asyncHandler(async (req, res) => {
  const listOfOrders = await Order.find({ orderedBy: req.user });
  res.status(200).send(listOfOrders);
});
