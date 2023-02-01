import asyncHandler from 'express-async-handler';
import Ingredient from '../models/ingredientModel.js';

// @desc    download a list of customizable ingredients
// @route   GET /api/ingredients
// @access  public
export const getIngredients = asyncHandler(async (req, res) => {
  const ingredients = await Ingredient.find();
  res.status(200).json(ingredients);
});
