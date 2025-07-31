const address = require("../models/address");

 const addaddress = async (req, res) => {
    try{
        const {userId, name, phone, street, city, state, zip} = req.body;

        if (!userId || !name || !phone || !street){
            return res.status(400).json({error: "Missing required fields "});
        }

        const newaddress = new address({
            userId,
            name,
            phone,
            street,
            city,
            state,
            zip,
        });

        await newaddress.save();
        res.status(201).json({message: "Address saved", address: newaddress});
    } catch(err){
        console.error("Error saving address:", err);
        res.status(500).json({error: "Server error"});
    }
};

module.exports = {addaddress};