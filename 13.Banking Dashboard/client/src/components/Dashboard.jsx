import React, { useEffect, useState } from 'react'
import BalanceCard from './BalanceCard';
import TransactionForm from './TransactionForm';
import TransactionTable from './TransactionTable';

const Dashboard = ({setIsLoggedIn}) => {

    const [transactions,setTransactions]=useState([]);
    const [loading,setLoading]=useState(true);
    const [balance,setBalance]=useState(0);

    const fetchTransactions=async()=>{
        try {
            setLoading(true);
            const res=await fetch('http://localhost:5000/api/transactions');
            const data=await res.json();
            setTransactions(data.transactions);
            setBalance(data.balance);
        } catch (error) {
            console.error(error);
            
        }finally{
            setLoading(false);
        }

    }

    useEffect(()=>{
        fetchTransactions();
    },[])

    const handleLogout=()=>{
        localStorage.removeItem('banking-token')
        setIsLoggedIn(false);
    }

  return (
    <div className='dashboard'>
        <header>
            <h1>Banking Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </header>

        <div className='balance-section'>
            <BalanceCard balance={balance} />
        </div>

        {loading ?(
            <div className='loading'>
              Loading transactions...
            </div>
        ):(
            <>
            
            <TransactionForm fetchTransactions={fetchTransactions} />
            <TransactionTable transactions={transactions} fetchTransactions={fetchTransactions} />
            </>

        )}
      
    </div>
  )
}

export default Dashboard
