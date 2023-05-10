const express = require("express");
const departmentsBLL = require("../BLL/departmentsBLL");

const router = express.Router();

// Entrt point: 'http://localhost:8000/api/departments'

router.route("/").get(async (req, res) => {
	const filters = req.query;
	const departments = await departmentsBLL.getDepartments(filters);
	res.json(departments);
});

router.route("/:id").get(async (req, res) => {
	const { id } = req.params;
	const department = await departmentsBLL.getDepartmentById(id);
	res.json(department);
});

router.route("/").post(async (req, res) => {
	const departmentObj = req.body;
	const result = await departmentsBLL.addDepartment(departmentObj);
	res.json(result);
});

router.route("/:id").put(async (req, res) => {
	const { id } = req.params;
	const departmentObj = req.body;
	const result = await departmentsBLL.updateDepartment(id, departmentObj);
	res.json(result);
});

router.route("/:id").delete(async (req, res) => {
	const { id } = req.params;
	const result = await departmentsBLL.deleteDepartment(id);
	res.json(result);
});

module.exports = router;
