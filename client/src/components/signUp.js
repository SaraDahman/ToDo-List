import React from 'react';
import { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';



function Signup (props){
    const [userName , setUserName] = useState('')
    const [ password , setPassword ] = useState('')
    
    let submit = (e) =>{
        axios.post('/signup' , {userName : userName , password : password})
        .then((response) => {
            Swal.fire(response.data.message)
            localStorage.setItem('name',  response.data.name )
            props.history.push('/list')
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return(
        <div className='container'>
            <label> Username </label>
            <input type='text' value={userName} name='userName' onChange= {(e) => setUserName(e.target.value)}></input>
            <label> Password </label>
            <input type='password' value={password} name='password' onChange= {(e) => setPassword(e.target.value)}></input>
            <button onClick ={submit}>Sign up</button>
        </div>
    )
}

export default Signup