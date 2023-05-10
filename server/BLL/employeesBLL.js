const Employee = require("../models/employeeModel");

const getEmployees = async (filters) => {
	try {
		const employees = await Employee.find(filters);
		return employees;
	} catch (error) {
		return error.message;
	}
};

const getEmployeeById = async (id) => {
	try {
		const employee = await Employee.findOne({ _id: id });

		if (!employee) {
			throw new Error(`Could not find employee with id: ${id}`);
		}

		return employee;
	} catch (error) {
		return error.message;
	}
};

const addEmployee = async (employeeObj) => {
	try {
		const employee = new Employee(employeeObj);
		return await employee.save();
	} catch (error) {
		return error.message;
	}
};

const updateEmployee = async (id, employeeObj) => {
	try {
		const employee = await Employee.findByIdAndUpdate(id, employeeObj, {
			returnDocument: "after",
		});

		if (!employee) {
			throw new Error(`Could not update employee with id: ${id}`);
		}

		return {
			message: `${employee.first_name} ${employee.last_name} was deleted successfully`,
			employee,
		};
	} catch (error) {
		return error.message;
	}
};

const deleteEmployee = async (id) => {
	try {
		const employee = await Employee.findByIdAndDelete(id);

		if (!employee) {
			throw new Error(`Could not delete employee with id: ${id}`);
		}

		return `${employee.first_name} ${employee.last_name} was deleted successfully`;
	} catch (error) {
		return error.message;
	}
};

module.exports = {
	getEmployees,
	getEmployeeById,
	addEmployee,
	updateEmployee,
	deleteEmployee,
};
