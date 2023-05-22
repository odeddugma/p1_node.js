const User = require("../models/userModel");

const reduceCredit = async (req, res) => {
	if (req.user.actions_left === 0) {
		return Error("You finished your Credits for today.");
	}

	await User.findByIdAndUpdate(
		req.user.id,
		{
			...req.user,
			actions_left: req.user.actions_left--,
		},
		{ returnDocument: "after" }
	);
};

const resetCredits = async () => {
	const users = await User.find({});

	users.forEach(async (user) => {
		await User.findByIdAndUpdate(user._id, {
			...user._doc,
			actions_left: user.num_of_actions,
		});
	});
};

module.exports = { reduceCredit, resetCredits };
