const mongoose = require("mongoose");

const connectDB = () => {
	mongoose
		.set("strictQuery", false)
		.connect("mongodb://127.0.0.1:27017/factoryDB")
		.then(() => console.log("Connected to factoryDB!"))
		.catch((error) => console.error(error));
};

module.exports = connectDB;
