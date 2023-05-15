const mongoose = require("mongoose");
const { ObjectId } = require("bson");

const employeeSchema = new mongoose.Schema(
	{
		first_name: {
			type: String,
			required: [true, "Please enter first name"],
		},
		last_name: {
			type: String,
			required: [true, "Please enter last name"],
		},
		start_work_year: {
			type: Number,
			minLength: 4,
			maxLength: 4,
		},
		departmentID: {
			type: ObjectId,
			required: [true, "Please enter department"],
		},
	},
	{ versionKey: false }
);

const Employee = mongoose.model("employee", employeeSchema);

module.exports = Employee;
