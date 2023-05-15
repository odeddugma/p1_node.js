const { reduceCredit } = require("../utils/manageCredits");

const checkCredits = async (req, res, next) => {
	const { user } = req;

	try {
		if (user.actions_left > 0) {
			reduceCredit(user);
			next();
		} else {
			throw new Error("You finished your Credits for today");
		}
	} catch (error) {
		res.status(401);
		res.json(error.message);
	}
};

module.exports = checkCredits;
