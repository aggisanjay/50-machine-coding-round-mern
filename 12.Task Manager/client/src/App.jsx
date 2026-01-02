import React, { useEffect, useState } from 'react'
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false);

  useEffect(()=>{
    if(localStorage.getItem('token')){
      setIsLoggedIn(true);
    }
  })

  return (
    <div className='App'>
      {isLoggedIn ? <Dashboard/> : <Login onLogin={()=>setIsLoggedIn(true)} />}
      
    </div>
  )
}

export default App
