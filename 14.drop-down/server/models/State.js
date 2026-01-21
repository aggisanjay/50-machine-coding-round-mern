import mongoose from 'mongoose'


const StateSchema=new mongoose.Schema({
    state:{type:String,required:true,unique:true},
    capital:{type:String,required:true,}
})

const State=mongoose.model('State',StateSchema)

export default State