import express from "express";
import { createTransaction, getTransaction } from "../controllers/transactions.js";



const transactionRouter=express.Router();
transactionRouter.get('/',getTransaction);
transactionRouter.post('/',createTransaction);



export default transactionRouter