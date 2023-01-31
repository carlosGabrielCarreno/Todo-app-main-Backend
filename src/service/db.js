const { Task } = require('../db');

const getTasksService = async () => {
	const tasks = await Task.findAll();

	return tasks;
};

const deleteTaskService = async (id) => {
	const task = await Task.findByPk(id);

	if (!task) throw new Error('Task not found');

	await task.destroy();
};

const updateTaskStatusService = async (id) => {
	const task = await Task.findByPk(id);

	if (!task) throw new Error('Task not found');

	task.status = !task.status;
	await task.save();

	return task;
};

const createTaskService = async (description) => {
	if (!description || description.length <= 1) throw new Error('Missing Data');

	const task = await Task.create({ description, status: true });

	return task;
};

module.exports = {
	deleteTaskService,
	updateTaskStatusService,
	createTaskService,
	getTasksService,
};
