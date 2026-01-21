import dotenv from 'dotenv'

dotenv.config()

import express from 'express'

import cors from 'cors'

import mongoose from 'mongoose'
import staterouter from './routes/stateRoutes.js'



const app=express()

app.use(cors())

app.use(express.json())




mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('MongoDB connected'))
.catch(err=>console.log('Mongo Error: ',err))

app.use('/api',staterouter)

app.listen(5000,()=>console.log('Server running on port 5000'))
