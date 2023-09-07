const dotenv = require("dotenv").config()
const express = require("express");
const connectDB = require('./config/connectDB')
const mongoose = require("mongoose");
const Task = require("./model/taskModel");


const app = express() 

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//Routes
app.get("/", (request, response) => {
    response.send("Home page");
})

// Create / Post a Task
app.post("/api/tasks", async (request, response) => {
    try {
        const task = await Task.create(request.body);
        response.status(200).json(task);
    } catch (error) {
        response.status(500).json({msg: error.message})
    }
})

// Get / Read Data
app.get("/api/tasks", async(request, response) => {
    try {
        const tasks = await Task.find() // get all data , if find(id) get only on that specific id
        response.status(200).json(tasks)
    } catch (error) {
        response.status(500).json({ msg: error.message })
    }
})

const PORT  = process.env.PORT || 5000

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    })
    .catch(err => console.log(err))

