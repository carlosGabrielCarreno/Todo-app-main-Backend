const { response, request } = require('express');
const { Task } = require('../db');

const getTasks = async (req = request, res = response) => {
	const tasks = await Task.findAll();
	try {
		res.send(tasks);
	} catch (error) {
		res.status(400).send(error);
	}
};

const createTask = async (req = request, res = response) => {
	const { description } = req.body;

	if (description.length <= 1) return res.status(404).send('Missing Data');

	try {
		//const task = await Task.cre
	} catch (error) {
		res.status(400).send(error);
	}
};

module.exports = {
	createTask,
	getTasks,
};
