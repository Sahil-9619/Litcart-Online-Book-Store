const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const loginRoutes = require('./routes/loginRoutes');
const newarrivals  = require('./routes/newarrivals');
const cartRoutes = require('./routes/cartRoutes');
const addressRoutes = require('./routes/addressRoutes');
const searchRoutes = require('./routes/searchRoutes');

const app=express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect("mongodb://localhost:27017/litcart",{
    useNewUrlParser: true,
     useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB error:',err));

//Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', loginRoutes);
app.use('/api/books', newarrivals);
app.use('/api/cart', cartRoutes);
app.use('/api/address', addressRoutes);
app.use('/api/search', searchRoutes);



//Root
app.get('/', (req, res) =>{
    res.send('Server is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Server running on http://localhost:${PORT}`);
});