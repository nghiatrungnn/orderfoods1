const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  foodItem: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true }, // Thêm trường price
  customerName: { type: String, required: true },
  address: { type: String, required: true },
  status: { type: String, default: 'pending' },
  orderDate: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true } // Thêm trường imageUrl
});

module.exports = mongoose.model('Order', orderSchema);
