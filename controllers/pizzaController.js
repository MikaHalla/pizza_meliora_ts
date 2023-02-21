import asyncHandler from 'express-async-handler';
import Pizza from '../models/pizzaModel.js';

// @desc      get list of all pizzas
// @route     GET /api/pizza
// @access    public
export const getPizzas = asyncHandler(async (req, res) => {
  const pizzas = await Pizza.find();
  res.status(200).json(pizzas);
});
