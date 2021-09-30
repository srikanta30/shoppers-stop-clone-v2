//User Controller:

const express = require('express');
const router = express.Router();
const crud = require("./crud.controller");

const User = require('../models/user.model');

router.post("/", crud.post(User));
router.get("/", crud.get(User));
router.get("/:id", crud.getOne(User));
router.patch("/:id", crud.updateOne(User));
router.delete("/:id", crud.deleteOne(User));

module.exports = router;