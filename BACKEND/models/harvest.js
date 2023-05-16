const mongoose = require('mongoose');


const harvestSchema = new mongoose.Schema({
  usageDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  morningKG: {
    type: String,
    required: true
  },
  eveningKG: {
    type: Number,
    required: true
  },
  totalHarvest: {
    type: Number,
    required: true
  },
  gradeA: {
    type: Number,
    required: true
  },
  gradeB: {
    type: Number,
    required: true
  },
  outshape: {
    type: Number,
    required: true
  },
  damage: {
    type: Number,
    required: true
  },
});



const harvest=mongoose.model("harvest",harvestSchema);

module.exports = harvest;