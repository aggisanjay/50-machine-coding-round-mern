import React from 'react'

const TransactionTable = ({transactions}) => {
  return (
    <div className='transaction-table'>
        <h2>Recent Transactions</h2>
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.slice(0,10).map(transaction=>(
                        <tr key={transaction._id} >
                            <td>{new Date(transaction.date).toLocaleDateString()}</td>
                             <td>
                                <span className={`type-badge ${transaction.type}`}>
                                    {transaction.type.toUpperCase()}

                                </span>
                             </td>
                             <td>{transaction.category}</td>
                             <td>{transaction.description}</td>
                             <td className={transaction.type==='credit'?'credit':'debit'}>
                                {transaction.type==='credit'?'+':'-'}${transaction.amount.toLocaleString()}
                             </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
      
    </div>
  )
}

export default TransactionTable
