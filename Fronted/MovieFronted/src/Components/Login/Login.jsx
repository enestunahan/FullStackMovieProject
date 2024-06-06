import React, { useState } from 'react'
import './Login.css'
// import {useHistory} from 'react-router-dom'


export default function Login({setIsAuthenticated}) {
  
  const[userName, setUserName] = useState('');
  const[password, setPassword] = useState('');
  //const history = useHistory();
  
  const handleSubmit = (e) => {

    e.preventDefault();
    
    if(userName == 'admin' && password === '1234'){
        
        setIsAuthenticated(true);
       // history.push('/admin');
    
    } else{
        alert('kullanıcı adı veya şife hatalı');
    }

  }
  
    return (

        <div className='login'>
            <form onSubmit={handleSubmit}>

                <button type='submit'></button>
            </form>
        </div>
  
)
}
