const express = require('express');
const router = express.Router();
const fertilizerUsage = require('../models/fertilizer');


router.get('/', async (req, res) => {
  try {
    const chemicalData = await fertilizerUsage.find();
    res.status(200).json(chemicalData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/', async (req, res) => {
  const fertilizerUsage = new fertilizerUsage({
    NameOfTheFertilizer: req.body.chemicalName,
    usageDate: req.body.usageDate,
    activePlants: req.body.activePlants,
    amountObtained: req.body.amountObtained,
    unitPrice: req.body.unitPrice,
    amount:req.body.amount
  });

  try {
    const newFertilizerUsage = await chemicalUsage.save();
    res.status(201).json(newFertilizerUsage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
