import React, { useState } from 'react';

const TransactionForm = ({ fetchTransactions }) => {
  const [formData, setFormData] = useState({
    type: 'credit',
    amount: '',
    description: '',
    category: 'salary'
  });

  const categories = {
    credit: ['salary', 'investment', 'gift', 'refund'],
    debit: ['food', 'transport', 'shopping', 'bills', 'entertainment']
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:5000/api/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      fetchTransactions();
      setFormData({ type: 'credit', amount: '', description: '', category: 'salary' });
    } catch (err) {
      alert('Transaction failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <select 
        value={formData.type} 
        onChange={e => setFormData({...formData, type: e.target.value})}
      >
        <option value="credit">Credit 💰</option>
        <option value="debit">Debit 💸</option>
      </select>
      
      <input 
        type="number" 
        placeholder="Amount" 
        value={formData.amount}
        onChange={e => setFormData({...formData, amount: e.target.value})}
        required
      />
      
      <input 
        type="text" 
        placeholder="Description" 
        value={formData.description}
        onChange={e => setFormData({...formData, description: e.target.value})}
        required
      />
      
      <select 
        value={formData.category}
        onChange={e => setFormData({...formData, category: e.target.value})}
      >
        {categories[formData.type].map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
