import mongoose from 'mongoose';

const ingredientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  removed: {
    type: Boolean,
    required: true,
  },
});

const itemSchema = mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Pizza',
  },
  price: {
    type: Number,
    required: true,
  },
  ingredients: [ingredientSchema],
});

const orderSchema = mongoose.Schema(
  {
    orderedBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    items: [itemSchema],
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
