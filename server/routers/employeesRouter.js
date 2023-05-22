const express = require("express");
const employeesBLL = require("../BLL/employeesBLL");

const router = express.Router();

// Entrt point: 'http://localhost:8000/api/employees'

// Protect these routes with middleware
const protect = require("../middlewares/authMiddleware");
router.use((req, res, next) => {
	protect(req, res, next);
});

// Routes
router.route("/").get(async (req, res) => {
	const filters = req.query;
	const employees = await employeesBLL.getEmployees(filters);
	res.json(employees);
});

router.route("/:id").get(async (req, res) => {
	const { id } = req.params;
	const employee = await employeesBLL.getEmployeeById(id);
	res.json(employee);
});

router.route("/by-department/:departmentId").get(async (req, res) => {
	const { departmentId: departmentID } = req.params;
	const employees = await employeesBLL.getEmployees({ departmentID });
	res.json(employees);
});

router.route("/").post(async (req, res) => {
	const employeeObj = req.body;
	const result = await employeesBLL.addEmployee(employeeObj);
	res.json(result);
});

router.route("/:id").put(async (req, res) => {
	const { id } = req.params;
	const employeeObj = req.body;
	const result = await employeesBLL.updateEmployee(id, employeeObj);
	res.json(result);
});

router.route("/:id").delete(async (req, res) => {
	const { id } = req.params;
	const result = await employeesBLL.deleteEmployee(id);
	res.json(result);
});

module.exports = router;
