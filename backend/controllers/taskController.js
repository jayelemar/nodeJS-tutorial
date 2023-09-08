const { request, response } = require("express");
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

// Get a Task
const getTask = async (request, response) => {
    try {
        const { id } = request.params
        const task  = await Task.findById(id);
        if (!task) {
            return response.status(404).json(`No task with id: ${id}`)
        }

        response.status(200).json(task)
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
};

// Delete Task
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findByIdAndDelete(id)
        if (!task) {
            return response.status(404).json(`No task with id: ${id}`)
        }

        res.status(200).send("Task deleted")
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
};

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        // console.log("Updating task with ID:", id);
        // console.log("Request Body:", req.body);
        const task = await Task.findByIdAndUpdate(
            {_id: id}, 
            req.body,
            { new: true },
        );
        // console.log("Updated Task:", task);

        if (!task) {
            return res.status(404).json(`No task with id: ${id}`);
        }
        res.status(200).json(task);
    } catch (error) {
        // console.error("Error:", error);
        res.status(500).json({ msg: error.message });
    }
};

module.exports = {
    createTask, getTasks, getTask, deleteTask, updateTask
}