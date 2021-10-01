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
		res.render("home.ejs");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
});

router.get("/signin", async (req, res) => {
	try {
		res.render("signin.ejs");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
});

router.get("/signinwithotp", async (req, res) => {
	try {
		res.render("signinwithotp.ejs");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
});

router.get("/signup", async (req, res) => {
	try {
		res.render("signup.ejs");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
});

router.get("/sendotp", async (req, res) => {
	try {
		res.render("sendotp.ejs");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
});

router.get("/processing", async (req, res) => {
	try {
		res.render("processing.ejs");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
});



module.exports = router;