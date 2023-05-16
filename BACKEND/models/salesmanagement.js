const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },
  orderDate: {
    type: Date,
    required: true
  },
  orderItems: [
    {
      product: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
