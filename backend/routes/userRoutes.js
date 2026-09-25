const express = require('express');
const router = express.Router();
const User = require('../models/User');



router.post('/users', async (req, res) => {
    try {
        const { name, age } = req.body;
        const user = new User({ name, age });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }   
});

router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;