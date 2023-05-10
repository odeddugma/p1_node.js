const mongoose = require("mongoose");
const { ObjectId } = require("bson");

const departmentSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please enter department name"],
		},
		manager: {
			type: ObjectId,
			required: [true, "Every department must have a manager"],
		},
	},
	{ versionKey: false }
);

const Department = mongoose.model("department", departmentSchema);

module.exports = Department;
