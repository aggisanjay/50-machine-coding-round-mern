
import dotenv from 'dotenv'

dotenv.config()

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import taskRouter from './routes/taskRoute.js'


const app=express()

app.use(express.json())
app.use(cors())




mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('MongoDB connected'))
.catch(err=>console.log('Mongo Error: ',err))


app.use('/api/tasks',taskRouter)

app.listen(5000,()=>console.log('server running on port 5000'));