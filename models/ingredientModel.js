import mongoose from 'mongoose';

const ingredientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

export default Ingredient;
