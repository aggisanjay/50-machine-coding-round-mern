import React from 'react'

const BalanceCard = ({balance}) => {

    const formatBalance=(amount)=>{
        return new Intl.NumberFormat('en-IN',{
            style:'currency',
            currency:'INR',

        }).format(amount)
    }

  return (
    <div className='balance-card'>
        <div className='balance-label'>
            Current Balance
        </div>
        <div className={`balance-amount ${balance>=0 ?'positive':'negative'}`}>
            {formatBalance(balance)}

        </div>
        <div className='balance-date'>
            As of {new Date().toLocaleDateString()}

        </div>
      
    </div>
  )
}

export default BalanceCard
