import React, { useState } from 'react'

const Login = ({onLogin}) => {

    const [credentials,setCredentials]=useState({email:'',password:''});

    const [error,setError]=useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();
        setError('');

        if(credentials.email==='admin@company.com' && credentials.password==='admin123'){
            localStorage.setItem('token','taskmanager-valid-token');
            localStorage.setItem('user',JSON.stringify({email:credentials.email}));
            onLogin();
        }else{
            setError('Invalid email or password');
        }

    }

  return (
    <div className='login-container'>
        <div className='login-card'>
            <div className='login-header'>
                <h1>Task Manager</h1>
                <p>Login to manage tour tasks</p>

                <form onSubmit={handleSubmit} className='login-form'>
                    <div className='input-group'>
                        <label>Email</label>
                        <input type='email' placeholder='admin@company.com' value={credentials.email} onChange={(e)=>setCredentials({...credentials,email:e.target.value})} required />

                    </div>

                    <div className='input-group'>
                        <label>Password</label>
                        <input type='password' value={credentials.password} onChange={(e)=>setCredentials({...credentials,password:e.target.value})}  required/>

                    </div>

                    {error && <div className='error-message'>{error}</div>}
                   
                   <button type='submit' className='login-button'>
                    Login

                   </button>
                </form>

            </div>

        </div>
      
    </div>
  )
}

export default Login
