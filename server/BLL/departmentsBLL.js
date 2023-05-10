const Department = require("../models/departmentModel");

const getDepartments = async (filters) => {
	try {
		const department = await Department.find(filters);
		return department;
	} catch (error) {
		return error.message;
	}
};

const getDepartmentById = async (id) => {
	try {
		const department = await Department.findOne({ _id: id });

		if (!department) {
			throw new Error(`Could not find department with id: ${id}`);
		}

		return department;
	} catch (error) {
		return error.message;
	}
};

const addDepartment = async (departmentObj) => {
	try {
		const department = new Department(departmentObj);
		return await department.save();
	} catch (error) {
		return error.message;
	}
};

const updateDepartment = async (id, departmentObj) => {
	try {
		const department = await Department.findByIdAndUpdate(id, departmentObj, {
			returnDocument: "after",
		});

		if (!department) {
			throw new Error(`Could not update department with id: ${id}`);
		}

		return {
			message: `Department ${department.name} has been updated successfully`,
			department,
		};
	} catch (error) {
		return error.message;
	}
};

const deleteDepartment = async (id) => {
	try {
		const department = await Department.findByIdAndDelete(id);

		if (!department) {
			throw new Error(`Could not delete department with id: ${id}`);
		}

		return `Department ${department.name} has been deleted successfully`;
	} catch (error) {
		return error.message;
	}
};

module.exports = {
	getDepartments,
	getDepartmentById,
	addDepartment,
	updateDepartment,
	deleteDepartment,
};
