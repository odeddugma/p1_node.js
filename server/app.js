const express = require("express");
const cors = require("cors");

const connectDB = require("./configs/db");

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

// API routes
const usersRouter = require("./routers/usersRouter");
const employeesRouter = require("./routers/employeesRouter");
const departmentsRouter = require("./routers/departmentsRouter");
const shiftsRouter = require("./routers/shiftsRouter");

// API routers
app.use("/api/users", usersRouter);
app.use("/api/employees", employeesRouter);
app.use("/api/departments", departmentsRouter);
app.use("/api/shifts", shiftsRouter);

// Reset credits number
setInterval(() => {
	const date = new Date();
	const [h, m] = [date.getHours(), date.getMinutes()];

	console.log(date);
	console.log(h);
	console.log(m);
	if (h === 00 && m === 00) {
		const { resetCredits } = require("./utils/manageCredits");
		resetCredits();
	}
}, 60000);

app.listen(port, () => {
	console.log(`listening on http://localhost:${port}`);
});
