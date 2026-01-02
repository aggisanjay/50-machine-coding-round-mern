
import Task from '../models/Task.js'





//create task

export const createTask=async(req,res)=>{
    try {
        const task=new Task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({error:err.message})
        
    }
}


// get task

export const getTask=async(req,res)=>{
    try {
        const task=await Task.find().sort({createdAt:-1});
        res.json(task);
    } catch (error) {
        res.status(500).json({error:err.message});
        
    }
}


//update task

export const updateTask=async(req,res)=>{
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
}

//delete task

export const deleteTask=async(req,res)=>{
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
}