import axios from 'axios'
import React, { useState} from 'react'
import TaskForm from './TaskForm'
import Task from './Task'
import { toast } from 'react-toastify';
import { URL } from '../App';

// http://localhost:5000/api/tasks

const TaskList = () => {
    const [formData, setFormData] = useState({ 
        name: "",
        completed: false
    })
    const { name } = formData

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value });
    };

    const createTask = async (e) => {
        e.preventDefault();
        if (name === "") {
            return toast.error("Input Field cannot be empty")
        }
        try {
            await axios.post(`${URL}/api/tasks`, formData)
            setFormData({ ...formData, name: "" });
            toast.success("Task added successfully")
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
    };
  return (
    <div>
        <h2>Task Manager</h2>
        <TaskForm name={name} handleInputChange={handleInputChange} createTask={createTask} />
        <div className="--flex-between --pb ">
            <p>
                <b>Total Tasks:</b> 0
            </p>
            <p>
                <b>Completed Tasks:</b> 0
            </p>
        </div>
        <hr />
        <Task />
    </div>
  )
}

export default TaskList
