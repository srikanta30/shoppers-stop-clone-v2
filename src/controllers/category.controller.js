//Category Controller:

const express = require('express');
const router = express.Router();
const crud = require("./crud.controller");

const Products = require('../models/product.model');
router.get("/", crud.get(Products, "category.ejs"));

module.exports = router;
