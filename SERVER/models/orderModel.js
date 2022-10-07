import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
  {
    orderedBy: {
      type: String,
      required: true,
    },
    item: { type: String, required: true },
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
