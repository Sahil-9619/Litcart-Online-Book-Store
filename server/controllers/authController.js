const User = require('../models/User');
const bcrypt = require('bcrypt');

//Post krna like /api/auth/signup
const registerUser = async (req, res) => {
    try{
        const {name, email, password} = req.body;

        const existingUser = await User.findOne({email});
        if (existingUser){
            return res.status(400).json({message: 'User already exists'});
        }

        //Hash the password....
        const hashedPassword = await bcrypt.hash(password, 10);

        //yahan pr new user account create hoga
        const newUser = new User({name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({message: 'User created successfully!'});
    } catch(err) {
        console.error('Signup error:', err);
        res.status(500).json({message: 'Server error'});
    }
};

module.exports = {registerUser};