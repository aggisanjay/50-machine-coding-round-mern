import React, { useEffect, useState } from 'react'
import Dashboard from './components/Dashboard';
import Login from './components/Login';

const App = () => {

  const [isLoggedIn,setIsLoggedIn]=useState(false);
   
  useEffect(()=>{
    if(localStorage.getItem('banking-token')){
      setIsLoggedIn(true);
    }
  },[])

  return (
    <div className='app'>
      {isLoggedIn ?(
        <Dashboard setIsLoggedIn={setIsLoggedIn} />
      ):(
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
      
    </div>
  )
}

export default App
