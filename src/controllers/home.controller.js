//Home Controller:

const express = require('express');
const app = express.Router();

app.get("/", async (req, res) => {
	try {
		res.render("home");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
})

app.get("/home", async (req, res) => {
	try {
		res.render("home");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
})

app.get("/cart", async (req, res) => {
	try {
		res.render("cart");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
})

app.get("/checkout", async (req, res) => {
	try {
		res.render("checkout");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
})

app.get("/payment", async (req, res) => {
	try {
		res.render("payment");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
})

app.get("/processing", async (req, res) => {
	try {
		res.render("processing");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
})

app.get("/successful", async (req, res) => {
	try {
		res.render("successful");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
})

module.exports = app;