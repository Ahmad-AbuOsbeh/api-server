'use strict';
const { start } = require('./src/server');
const mongoose = require('mongoose');

require('dotenv').config();
const PORT = process.env.PORT || 3004;

const MONGODB_URI = process.env.MONGODB_URI;
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    start(PORT);
  })
  .catch((e) => {
    console.error('CONNECTION ERROR', e.message);
  });
