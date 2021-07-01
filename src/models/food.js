'use strict';
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  type: { type: String, required: true },
  color: String,
});

const foodModel = mongoose.model('foodcollection', foodSchema);

module.exports = foodModel;
