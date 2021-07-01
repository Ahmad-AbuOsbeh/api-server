'use strict';
const mongoose = require('mongoose');

const clothesSchema = new mongoose.Schema({
  type: { type: String, required: true },
  color: String,
});

const clothesModel = mongoose.model('clothescollection', clothesSchema);

module.exports = clothesModel;
