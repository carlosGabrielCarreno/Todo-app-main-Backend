const { Router, request, response } = require('express');
const { Task } = require('../db');

const router = Router();

router.get('/tasks', async (req = request, res = response) => {
  const tasks = await Task.findAll();
  try {
    res.send(tasks);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
