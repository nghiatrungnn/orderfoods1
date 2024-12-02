require('dotenv').config(); // Thêm dòng này ở đầu tệp
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Kết nối tới MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 20000, // Thay đổi thời gian timeout ở đây
  tls:true,
});


// Middleware
app.use(bodyParser.json());
app.use('/api', orderRoutes);
app.use('/api/auth', authRoutes); 

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
  console.log("http://localhost:3000/api/orders");
});
