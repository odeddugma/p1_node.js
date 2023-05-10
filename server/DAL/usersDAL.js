const axios = require("axios");

const url = "http://jsonplaceholder.typicode.com/users/";

const getAllUsers = async () => {
	try {
		return axios.get(url);
	} catch (e) {
		console.error(e);
	}
};

module.exports = getAllUsers;
