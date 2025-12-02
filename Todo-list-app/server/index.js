import express from 'express';
import mongoose from 'mongoose';

import cors from 'cors'
import dotenv from 'dotenv'

import {Task} from './models/Task.js'

dotenv.config();


const app=express();

app.use(cors());

app.use(express.json());

//connect mongoDB

const MONOGO_URI=process.env.MONGO_URI;

const PORT=process.env.PORT || 5000;

mongoose.connect(MONOGO_URI)
.then(()=>{
    console.log("Connected to MongoDB");
    app.listen(PORT,()=>
        console.log(`Server is running on port ${PORT}`)
    )
    })
    .catch((error)=>{
        console.log(error.message);
    
});



//routes
//get all tasks

app.get('/api/tasks',async(req,res)=>{
    try{
        const tasks=await Task.find().sort({createdAt:-1});
        res.json(tasks);
    } catch(error){
        res.status(500).json({message:error.message});
    }
})

//create a new task
app.post('/api/tasks', async (req, res) => {
  try {
    const { title } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({ message: "Title is required" });
    }

    const task = await Task.create({ title: title.trim() });
    res.status(201).json(task);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//update a task
app.put('/api/tasks/:id', async (req, res) => {
  try {
    const { title } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({ message: "Title is required" });
    }

    const updated = await Task.findByIdAndUpdate(
      req.params.id,
      { title: title.trim() },
      { new: true }
    );

    if (!updated)
      return res.status(404).json({ message: "Task not found" });

    res.json(updated);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//toggle a task

app.patch('/api/tasks/:id',async(req,res)=>{
    try{
        const task=await Task.findById(req.params.id);
        if(!task) return res.status(404).json({message:"Task not found"});
        task.completed=!task.completed;
        await task.save();
        res.json(task);
    }catch(error){
        res.status(500).json({message:error.message});
    }
})


//delete a task

app.delete('/api/tasks/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const deleted=await Task.findByIdAndDelete(id);
        if(!deleted) return res.status(404).json({message:"Task not found"});
        res.json({message:"Task deleted successfully"});

    }catch(error){
        res.status(500).json({message:error.message});
    }
})
