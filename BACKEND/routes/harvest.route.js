const express = require('express');
const router = express.Router();
const harvest = require('../models/harvest');


router.get('/', async (req, res) => {
  try {
    const harvestData = await harvest.find();
    res.status(200).json(harvest);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/', async (req, res) => {
  const chemicalUsage = new harvest({
    usageDate: req.body.usageDate,
   morningKG  : req.body.morningKG,
    eveningKG: req.body.eveningKG,
    totalHarvest:req.body.totalHarvest,
    gradeA: req.body.gradeA,
    gradeB:req.body.gradeB,
    damage:req.body.damage,
    outshape:req.body.outshape

  });

  try {
    const newHarvest = await harvestData.save();
    res.status(201).json(harvestData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
