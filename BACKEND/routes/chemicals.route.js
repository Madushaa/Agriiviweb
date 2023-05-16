const express = require('express');
const router = express.Router();
const ChemicalUsage = require('../models/chemicals');


router.get('/', async (req, res) => {
  try {
    const chemicalData = await ChemicalUsage.find();
    res.status(200).json(chemicalData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/', async (req, res) => {
  const chemicalUsage = new ChemicalUsage({
    NameOfTheChemical: req.body.NameOfTheChemical,
    usageDate: req.body.usageDate,
    Pesticide: req.body.Pesticide,
    Fungicide: req.body.Fungicide,
    amountObtained: req.body.amountObtained,
    unitPrice:req.body.unitPrice,
    amount:req.body.amount    


  });

  try {
    const newChemicalUsage = await chemicalUsage.save();
    res.status(201).json(newChemicalUsage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
