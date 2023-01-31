const {
	getTasksService,
	createTaskService,
	updateTaskStatusService,
	deleteTaskService,
} = require('../service');

const getTasks = async (req, res) => {
	try {
		const tasks = await getTasksService();
		return res.send(tasks);
	} catch (error) {
		return res.status(400).send(error.message);
	}
};

const createTask = async (req, res) => {
	const { description } = req.body;

	try {
		const createdTask = await createTaskService(description);
		return res.status(201).json(createdTask);
	} catch (error) {
		return res.status(400).send(error.message);
	}
};

const editStatus = async (req, res) => {
	const { id } = req.params;

	try {
		const updatedTask = await updateTaskStatusService(id);
		return res.status(200).json(updatedTask);
	} catch (error) {
		return res.status(404).send(error.message);
	}
};

const deleteTask = async (req, res) => {
	const { id } = req.params;

	if (!id) return res.status(400).send('Missing task ID');

	try {
		await deleteTaskService(id);
		return res.status(200).send('Task deleted successfully');
	} catch (error) {
		return res.status(404).send(error.message);
	}
};

module.exports = {
	createTask,
	getTasks,
	editStatus,
	deleteTask,
};
