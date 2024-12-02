const express = require('express');
const { createOrder, getOrders, updateOrder, deleteOrder } = require('../controllers/orderController');
const router = express.Router();

// Đặt hàng mới
router.post('/orders', createOrder);

// Lấy danh sách đơn hàng
router.get('/orders', getOrders);

// Cập nhật đơn hàng
router.put('/orders/:id', updateOrder); // Thêm route cập nhật đơn hàng

// Xóa đơn hàng
router.delete('/orders/:id', deleteOrder); // Thêm route xóa đơn hàng

module.exports = router;
