const { Router, request, response } = require('express');
const { getTasks } = require('../controllers');
const { createTask } = require('../controllers/task');
const { Task } = require('../db');

const router = Router();

router.get('/tasks', getTasks);

router.post('/create', createTask);

module.exports = router;
