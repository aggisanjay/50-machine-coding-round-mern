
import dotenv from 'dotenv'

dotenv.config()

import express from 'express'

import mongoose from 'mongoose'

import cors from 'cors'
import transactionRouter from './routes/transaction.js'


const app=express();

app.use(express.json());

app.use(cors())


mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('MongoDb connected'))
.catch(err=>console.log('MONGO ERR',err));

app.use('/api/transactions',transactionRouter);


app.listen(5000,()=>console.log('server running port 5000'))