
import express from 'express'
import { createTask, deleteTask, getTask, updateTask } from '../controllers/taskController.js';


const taskRouter=express.Router();


taskRouter.post('/',createTask);
taskRouter.get('/',getTask);
taskRouter.put('/:id',updateTask);
taskRouter.delete('/:id',deleteTask);

export default taskRouter