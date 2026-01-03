 import mongoose from 'mongoose'

 const transactionSchema=new mongoose.Schema({
    type:{type:String,enum:['credit','debit'],required:true},
    amount:{type:Number,required:true},
    description:{type:String,required:true},
    category:{type:String,required:true},
    date:{type:Date,default:Date.now}
 },{timestamps:true});

 export default mongoose.model('Transaction',transactionSchema);