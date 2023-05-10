const express = require("express");
const usersBLL = require("../BLL/usersBLL");

const router = express.Router();

// Entrt point: 'http://localhost:8000/api/users'

router.route("/login").post(async (req, res) => {
	const { email, username } = req.body;
	const user = await usersBLL.getUser(email, username);
	res.json(user);
});

module.exports = router;
