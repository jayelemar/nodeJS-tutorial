const dotenv = require("dotenv").config()
const express = require("express");
const connectDB = require('./config/connectDB')
const mongoose = require("mongoose")

const app = express() 

app.get("/", (req, res) => {
    res.send("Home page");
})

// Create a Task
app.post("/api/tasks", async (request, response) => {
    console.log(request.body);
    response.send("Task Created")
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

