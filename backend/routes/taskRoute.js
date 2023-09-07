const express = require('express');
const Task = require('../models/taskModel');
const { createTask, getTasks, getTask } = require('../controllers/taskController');
const router = express.Router()

// Create / Post a Task
router.post("/api/tasks", createTask )

// Get / Read All Tasks
router.get("/api/tasks", getTasks )
// Get / Read a Task
router.get("/api/tasks/:id", getTask )

module.exports = router