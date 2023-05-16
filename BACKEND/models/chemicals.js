const mongoose = require('mongoose');


const chemicalUsageSchema = new mongoose.Schema({
  usageDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  NameOfTheChemical: {
    type: String,
    required: true
  },
  Pesticide: {
    type: String,
    required: true
  },
  Fungicide: {
    type: String,
    required: true
  },
  amountObtained: {
    type: Number,
    required: true
  },
  unitPrice: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  }
});



const chemicals=mongoose.model("Chemicals",chemicalUsageSchema);

module.exports = chemicals;