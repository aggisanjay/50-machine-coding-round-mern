import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import studentRouter from './routes/studentRoutes.js';
import cors from "cors";
dotenv.config();


const app=express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI).then(()=>console.log('MongoDB connected'))
.catch((error)=>console.log(error));


app.use('/api/students',studentRouter);

app.listen(5000,()=>console.log('Server running on port 5000'));
