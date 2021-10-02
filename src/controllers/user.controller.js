//User Controller:

const express = require('express');
const router = express.Router();
const crud = require("./crud.controller");

const User = require('../models/user.model');

router.post("/", async (req, res) => {
	try {
		const item = await User.create(req.body);
		return res.status(201).send({item});
	} catch (err) {
		return res.status(400).send({ err });
	}
});
 

router.get("/", crud.get(User));
router.get("/:id", async (req, res) => {
    try {
		const item = await User.find({ _id: req.params.id }).lean().exec();
		return res.status(200).send({ item });
	} catch (err) {
		return res.status(400).send({ err });
	}
})

router.patch("/:id", crud.updateOne(User));

module.exports = router;