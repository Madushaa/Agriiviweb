

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();


router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  
  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.status(200).json({ token });
});

module.exports = router;
