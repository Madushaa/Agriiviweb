const express = require('express');
const router = express.Router();
const UserModel = require('../models/userModel');

router.post('/signup', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      farmName,
      farmSize,
      address
    } = req.body;

    const newUser = new UserModel({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      farmName,
      farmSize,
      address
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;