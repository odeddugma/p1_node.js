const jwt = require("jsonwebtoken");

const usersDAL = require("../DAL/usersDAL");
const User = require("../models/userModel");

const getUser = async (email, username) => {
	try {
		// Get user from jsonplaceholder
		const { data: users } = await usersDAL();
		const user = users.find(
			(user) => user.email === email && user.username === username
		);

		if (!user) {
			throw new Error("Invalid username or email");
		}

		// Get the user from database at 'factoryDB.users' and add
		const userDB = await User.findOne({ jsonplaceholderID: user.id });

		// Create access token
		const SECRET_KEY = "someKey";
		const accessToken = jwt.sign({ id: userDB.id }, SECRET_KEY, {
			expiresIn: "30d",
		});

		return accessToken;
	} catch (error) {
		return error.message;
	}
};

module.exports = { getUser };
