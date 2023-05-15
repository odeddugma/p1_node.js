const express = require("express");
const shiftsBLL = require("../BLL/shiftsBLL");

const router = express.Router();

// Entrt point: 'http://localhost:8000/api/shifts'

// Protect these routes with middleware
const protect = require("../middlewares/authMiddleware");
router.use((req, res, next) => {
	protect(req, res, next);
});

// Routes
router.route("/").get(async (req, res) => {
	const filters = req.query;
	const shifts = await shiftsBLL.getAllShifts(filters);
	res.json(shifts);
});

router.route("/:id").get(async (req, res) => {
	const { id } = req.params;
	const shift = await shiftsBLL.getShiftById(id);
	res.json(shift);
});

router.route("/").post(async (req, res) => {
	const shiftObj = req.body;
	const result = await shiftsBLL.addShift(shiftObj);
	res.json(result);
});

router.route("/:id").put(async (req, res) => {
	const { id } = req.params;
	const shiftObj = req.body;
	const result = await shiftsBLL.updateShift(id, shiftObj);
	res.json(result);
});

module.exports = router;
