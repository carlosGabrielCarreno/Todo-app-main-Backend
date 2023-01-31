const { Router, request, response } = require('express');
const {
	getTasks,
	createTask,
	editStatus,
	deleteTask,
} = require('../controllers');
const { Task } = require('../db');

const router = Router();

router.get('/tasks', getTasks);

router.post('/create', createTask);

router.put('/edit/:id', editStatus);

router.delete('/delete/:id', deleteTask);

module.exports = router;
