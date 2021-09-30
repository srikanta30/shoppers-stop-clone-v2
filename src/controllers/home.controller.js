//Home Controller:

const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
	try {
		res.render("home");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
})

router.get("/home", async (req, res) => {
	try {
		res.render("home");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
})

router.get("/cart", async (req, res) => {
	try {
		res.render("cart");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
})

router.get("/checkout", async (req, res) => {
	try {
		res.render("checkout");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
})

router.get("/payment", async (req, res) => {
	try {
		res.render("payment");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
})

router.get("/processing", async (req, res) => {
	try {
		res.render("processing");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
})

router.get("/successful", async (req, res) => {
	try {
		res.render("successful");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
})

module.exports = router;