const User = require("../models/userModel");

const reduceCredit = async (user) => {
	await User.findByIdAndUpdate(
		user._id,
		{
			...user,
			actions_left: user.actions_left--,
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
