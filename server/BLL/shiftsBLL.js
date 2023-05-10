const Shift = require("../models/shiftModel");

const getAllShifts = async (filters) => {
	try {
		const shifts = await Shift.find(filters);
		return shifts;
	} catch (error) {
		return error.message;
	}
};

const getShiftById = async (id) => {
	try {
		const shift = await Shift.findOne({ _id: id });

		if (!shift) {
			throw new Error(`Shift ${id} not found`);
		}
		return shift;
	} catch (error) {
		return error.message;
	}
};

const addShift = async (shiftObj) => {
	try {
		const shift = new Shift(shiftObj);
		return await shift.save();
	} catch (error) {
		return error.message;
	}
};

const updateShift = async (id, shiftObj) => {
	try {
		const shift = await Shift.findByIdAndUpdate(id, shiftObj, {
			returnDocument: "after",
		});

		if (!shift) {
			throw new Error(`Could not update shift with id: ${id}`);
		}

		return {
			message: `Shift ${id} has been updated successfully`,
			shift,
		};
	} catch (error) {
		return error.message;
	}
};

module.exports = {
	getAllShifts,
	getShiftById,
	addShift,
	updateShift,
};
