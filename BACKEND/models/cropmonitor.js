const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  stage: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  pests: {
    type: String,
    required: true
  },
  diseases: {
    type: String,
    required: true
  },
  waterLevel: {
    type: Number,
    required: true
  }
});

const Crop = mongoose.model('Crop', cropSchema);

module.exports = Crop;
