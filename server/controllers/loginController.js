const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//POST/api/users/login
exports.login = async(req, res) =>{
    try{
        const { email, password } = req.body;

        //user exists or not .. check krega 
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(401).json({ message:'Invalid email or password'});
        }

        //compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password'});
        }

        const token = jwt.sign({ id: user._id }, 'your_jwt_secret',{
            expiresIn: '7d',
        });

        res.cookie('token', token, {
            httponly: false,
            secure: false,
            sameSite: 'Lax',
            maxAge: 7*24*60*60*1000
        });

        res.cookie('userId', user._id.toString(),{
            httponly: false,
            secure: false,
            sameSite: 'Lax',
            maxAge: 7*24*60*60*1000
        });

        res.status(200).json({
            success: true,
            message: 'Login successful',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                token,
            },
        });
    } catch(err) {
        console.error('Login Error:', err);
        res.status(500).json({ message: 'Server error' });
    }
};