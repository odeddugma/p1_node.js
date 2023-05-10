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

// API routers
app.use("/api/users", usersRouter);
app.use("/api/employees", employeesRouter);

app.listen(port, () => {
	console.log(`listening on http://localhost:${port}`);
});