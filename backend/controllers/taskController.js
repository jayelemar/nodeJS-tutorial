const Task = require("../models/taskModel");

// Create a Task
const createTask = async (request, response) => {
    try {
        const task = await Task.create(request.body);
        response.status(200).json(task);
    } catch (error) {
        response.status(500).json({msg: error.message})
    }
};

// Get All Task
const getTasks = async (request, response) => {
    try {
        const tasks = await Task.find();
        response.status(200).json(tasks);
    } catch (error) {
        response.status(500).json({ msg: error.message })
    }
};

module.exports = {
    createTask, getTasks,
}