const { Router, request, response } = require('express');
const { getTasks, createTask } = require('../controllers');
const { Task } = require('../db');

const router = Router();

router.get('/tasks', getTasks);

router.post('/create', createTask);

module.exports = router;
