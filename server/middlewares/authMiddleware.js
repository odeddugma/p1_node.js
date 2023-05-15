const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const { reduceCredit } = require("../utils/manageCredits");

const protect = async (req, res, next) => {
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer ")
	) {
		try {
			// Get the token from the header
			const token = req.headers.authorization.split(" ")[1];

			// Verify the token
			const SECRET_KEY = "someKey";
			const decodedToken = jwt.verify(token, SECRET_KEY);

			// Get user from the decoded token
			req.user = await User.findById(decodedToken.id);

			// Reduce credits after action
			/* const noCredits = await reduceCredit(req, res);
			if (noCredits) {
				throw new Error(noCredits.message);
			} */

			// Call for the next step
			next();
		} catch (error) {
			res.status(401);
			res.json(error.message);
		}
	} else {
		res.status(401);
		res.json("Not authorized. No token provided");
	}
};

module.exports = protect;
