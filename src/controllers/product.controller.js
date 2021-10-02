//Product Controller:

const express = require('express');
const router = express.Router();
const crud = require("./crud.controller");

const Products = require('../models/product.model');

router.post("/", crud.post(Products));
router.get("/", crud.get(Products));
router.get("/view/:id", crud.getOne(Products));
router.get("/:id", crud.getOne(Products, "product.ejs"));
router.patch("/:id", crud.updateOne(Products));
router.delete("/:id", crud.deleteOne(Products));

module.exports = router;