const mongoose = require('mongoose');


const fertilizerUsageSchema = new mongoose.Schema({
  usageDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  NameOfTheFertilizer: {
    type: String,
    required: true
  },
  activePlants: {
    type: Number,
    required: true
  },
  amountObtained: {
    type: Number,
    required: true
  },
  unitPrice: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
});



const fertilizer=mongoose.model("fertilizer",fertilizerUsageSchema);

module.exports = fertilizer;