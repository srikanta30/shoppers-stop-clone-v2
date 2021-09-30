//Product Controller:

const express = require('express');
const router = express.Router();
const crud = require("./crud.controller");

const Products = require('../models/product.model');

router.post("/", crud.post(Products));
router.get("/:id", crud.getOne(Products, "product.ejs"));
router.get("/:id", crud.getOne(Products));
router.patch("/:id", crud.updateOne(Products));
router.delete("/:id", crud.deleteOne(Products));

module.exports = router;