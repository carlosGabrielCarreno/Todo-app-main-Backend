const { Router, request, response } = require('express');
const { getTasks, createTask, editStatus } = require('../controllers');
const { Task } = require('../db');

const router = Router();

router.get('/tasks', getTasks);

router.post('/create', createTask);

router.put('/edit/:id', editStatus);

module.exports = router;
