const express = require('express');
const { createOrder, getOrders, deleteOrder } = require('../controllers/orderController');
const router = express.Router();

// Đặt hàng mới
router.post('/orders', createOrder);

// Lấy danh sách đơn hàng
router.get('/orders', getOrders);

// Xóa đơn hàng
router.delete('/orders/:id', deleteOrder); // Thêm route xóa đơn hàng

module.exports = router;
