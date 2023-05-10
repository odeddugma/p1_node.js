const mongoose = require("mongoose");

const shiftSchema = new mongoose.Schema(
	{
		date: {
			type: Date,
			required: true,
		},
		starting_hour: {
			type: Number,
			required: true,
		},
		ending_hour: {
			type: Number,
			required: true,
		},
	},
	{ versionKey: false }
);

const Shift = mongoose.model("shift", shiftSchema);

module.exports = Shift;
