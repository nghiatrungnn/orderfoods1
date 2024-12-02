const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Đăng ký người dùng mới
const register = async (req, res) => {
  const { username, password} = req.body;

  // Kiểm tra thông tin đầu vào
  if (!username || !password ) {
    return res.status(400).send('Thiếu thông tin cần thiết.');
  }

  const newUser = new User({ username, password });

  try {
    await newUser.save();
    res.status(201).send('Đăng ký thành công.');
  } catch (error) {
    console.error("Lỗi khi đăng ký:", error);
    res.status(400).send(error);
  }
};

// Đăng nhập
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).send('Tên đăng nhập hoặc mật khẩu không đúng.');
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error("Lỗi khi đăng nhập:", error);
    res.status(500).send(error);
  }
};

module.exports = {
  register,
  login
};
