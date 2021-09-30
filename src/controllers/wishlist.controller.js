//Wishlist Controller:

const express = require('express');
const router = express.Router();
const crud = require("./crud.controller");

router.get("/", async (req, res) => {
	try {
		res.render("wishlist.ejs");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
});

module.exports = router;
