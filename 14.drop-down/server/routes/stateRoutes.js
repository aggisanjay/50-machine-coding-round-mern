
import express from 'express'
import State from '../models/State.js'

const staterouter = express.Router()

staterouter.get('/states', async (req, res) => {
   try {
     const states = await State.find()
    res.send(states)
   } catch (error) {
    res.status(500).json({error: error.message})
    
   }
})

export default staterouter