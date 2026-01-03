import Transaction from "../models/Transaction.js"




export const getTransaction=async(req,res)=>{
    try {
        const transactions=await Transaction.find().sort({date:-1});
        const balance=transactions.reduce((acc,t)=>t.type==='credit'?acc+t.amount:acc-t.amount,0);
        res.json({transactions,balance});
    } catch (error) {
        res.status(500).json({error: error.message});
        
    }
}

//post transaction

export const createTransaction=async(req,res)=>{

    try {
        const transaction=new Transaction(req.body);
        await transaction.save();
        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

