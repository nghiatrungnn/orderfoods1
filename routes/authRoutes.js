const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

// Đăng ký người dùng mới
router.post('/register', register);

// Đăng nhập
router.post('/login', login);

module.exports = router;
