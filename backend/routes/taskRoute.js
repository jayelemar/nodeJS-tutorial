const express = require('express');
const Task = require('../model/taskModel');
const router = express.Router()

// Create / Post a Task
router.post("/api/tasks", async (request, response) => {
    try {
        const task = await Task.create(request.body);
        response.status(200).json(task);
    } catch (error) {
        response.status(500).json({msg: error.message})
    }
})

// Get / Read Tasks
router.get("/api/tasks", async(request, response) => {
    try {
        const tasks = await Task.find() // get all data , if find(id) get only on that specific id
        response.status(200).json(tasks)
    } catch (error) {
        response.status(500).json({ msg: error.message })
    }
})

module.exports = router