import React, { useEffect, useState } from 'react'

const App = () => {
  const [states,setStates]=useState([]);
  const [selectedState,setSelectedState]=useState('');
  const [capital,setCapital]=useState('');

  useEffect(()=>{
    fetch('http://localhost:5000/api/states')
    .then(res=>res.json())
    .then(data=>setStates(data))
    .catch(err=>console.error(err))
  },[])

  const handleChange=(e)=>{
    const value=e.target.value;
    setSelectedState(value);

    const match=states.find(s=>s.state===value);
    setCapital(match?match.capital:'')
  }

  

  return (
    <div className="container">
      <h2>State & Capital</h2>

      <div className="field">
        <label>Select State</label>
        <select value={selectedState} onChange={handleChange}>
          <option value="">Choose a state</option>
          {states.map(item => (
            <option key={item._id} value={item.state}>
              {item.state}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label>Capital</label>
        <input
          type="text"
          value={capital}
          placeholder="Capital will appear here"
          readOnly
        />
      </div>
    </div>
  )
}

export default App
