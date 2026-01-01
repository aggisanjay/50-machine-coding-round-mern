import mongoose from 'mongoose'

const studentSchema=new mongoose.Schema({
    name:{type:String,required:true},
    rollNo:{type:Number,required:true,unique:true},
    course:{type:String,required:true},
    marks:{type:Number,required:true}
},{timestamps:true})


export default mongoose.model('Student',studentSchema)