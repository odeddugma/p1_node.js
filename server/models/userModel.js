const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		full_name: String,
		num_of_actions: Number,
		jsonplaceholderID: Number,
	},
	{
		versionKey: false,
	}
);

const User = mongoose.model("user", userSchema);

module.exports = User;
