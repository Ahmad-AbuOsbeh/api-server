'use strict';

const express = require('express');
const router = express.Router();
const Interface = require('../models/data-collection-class');
const foodModel = require('../models/food');
const food = new Interface(foodModel);
const validator = require('../middleware/validator');

router.get('/', getFood);
router.get('/1/:id', getFood);
router.post('/', validator, addFood);
router.put('/1/:id', validator, updateFood);
router.delete('/1/:id', deleteFood);

async function getFood(req, res, next) {
  try {
    const resObj = await food.read(req.params.id);
    res.status(200).json(resObj);
  } catch (e) {
    next(e);
  }
}

async function addFood(req, res, next) {
  try {
    const resObj = await food.create(req.body);
    res.json(resObj);
  } catch (e) {
    next(e);
  }
}
async function updateFood(req, res, next) {
  try {
    const resObj = await food.update(req.params.id, req.body);
    res.json(resObj);
  } catch (e) {
    next(e);
  }
}

async function deleteFood(req, res, next) {
  try {
    const resObj = await food.delete(req.params.id);
    res.json(resObj);
    console.log('hello fromdelete');
  } catch (e) {
    console.log('from catch');
    next(e);
  }
}
module.exports = router;
