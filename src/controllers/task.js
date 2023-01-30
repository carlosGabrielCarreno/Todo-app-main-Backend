const { response, request } = require('express');
const { Task } = require('../db');

const getTasks = async (req = request, res = response) => {
	const tasks = await Task.findAll();
	try {
		res.send(tasks);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const createTask = async (req = request, res = response) => {
	const { description } = req.body;

	if (description.length <= 1) return res.status(404).send('Missing Data');

	try {
		const task = await Task.create({ description: description, status: true });
		res.json(task);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const editStatus = async (req = request, res = response) => {
	let { id } = req.params;
	//let { status } = req.body;
	const taskToUpdate = await Task.findByPk(id);

	if (!taskToUpdate) return res.status(404).send('Task not found');

	try {
		// edit status
		await taskToUpdate.update({
			status: !taskToUpdate.status,
		});
		await taskToUpdate.save();
		const tasksUpdates = await Task.findAll();
		res.json(tasksUpdates);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = {
	createTask,
	getTasks,
	editStatus,
};
