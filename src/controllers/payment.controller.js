//Payment Controller:

//Wishlist Controller:

const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
	try {
		res.render("payment.ejs");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
})




module.exports = router;