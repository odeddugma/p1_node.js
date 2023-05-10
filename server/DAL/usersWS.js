const axios = require("axios");

const url = "http://jsonplaceholder.typicode.com/users/";

const getAllUsers = () => {
	return axios.get(url);
};

const getUserById = (id) => {
	return axios.get(url + id);
};

module.exports = {
	getAllUsers,
	getUserById,
};
