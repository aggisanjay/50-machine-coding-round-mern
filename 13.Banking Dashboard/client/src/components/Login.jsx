import React, { useState } from 'react'

const Login = ({setIsLoggedIn}) => {

    const [creds,setCreds]=useState({email:'',pin:''})
     const handleSubmit=(e)=>{
        e.preventDefault();
        if(creds.email==='user@bank.com' && creds.pin==='1234'){
            localStorage.setItem('banking-token','valid');
            setIsLoggedIn(true);
        }else{
            alert('Invalid credentials');
        }
     }
  return (
    <div className='login-container'>
        <div className='login-card'>
            <div className='bank-logo'> Bank
               <h1>Digital Banking</h1>
               <form onSubmit={handleSubmit}>
                   <input placeholder='user@bank.com' type='email' value={creds.email} onChange={e=>setCreds({...creds,email:e.target.value})} />
                    <input placeholder='PIN (1234)' type='password' value={creds.pin} onChange={e=>setCreds({...creds,pin:e.target.value})} />
                   <button type='submit'>Login</button>
               </form>

            </div>
        </div>
      
    </div>
  )
}

export default Login
