import mongoose from 'mongoose';

const ingredientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isUnwanted: {
    type: Boolean,
    required: true,
  },
});

const pizzaSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  number: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ingredients: [ingredientSchema],
  tags: [{ type: String }],
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

export default Pizza;
