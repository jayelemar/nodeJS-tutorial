const dotenv = require("dotenv").config()
const express = require("express");
const connectDB = require('./config/connectDB')
const mongoose = require("mongoose");
const Task = require("./models/taskModel");
const taskRoutes =require("./routes/taskRoute")


const app = express() 

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(taskRoutes)

//Routes
app.get("/", (request, response) => {
    response.send("Home page");
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

