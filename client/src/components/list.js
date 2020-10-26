import React from 'react';
import { useState , useEffect } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import $ from 'jquery';


function Todo (props) {
    let userName = localStorage.getItem('name')
    const [tasks , setTasks] = useState([])
    const [counter, setCounter] = useState(0);
    const [ task , setTask ] = useState('')

    useEffect(() => {
        axios.get(`/${userName}`)
        .then((response) => {
            console.log(response.data);
            setTasks(response.data)
        })
    }, [counter])

    let addTask = (e) => {
        axios.post(`/add/${userName}`, {task : task})
        .then((response) => {
            // Swal.fire(response.data)
            setCounter(counter+1)
            setTask('')
        })
        .then((error) => {
            console.log(error , 'failed to add a new task');
        })
    }

    let getContent = (e) => {
        $(this).parent().css({
            "color": "blue", 
            "border": "2px solid green"
          })
        
        // e.target.parentNode.textContent
          console.log(e.currentTarget);
          e.currentTarget.parentElement.style.backgroundColor = '#b3e6ff'
        // e.target.parentNode.style.backgroundColor = '#b3e6ff'
    }

    let deleteTask = (e) => {
        let index = e.target.id;
        axios.post(`/remove/${userName}` , {index : index})
        .then((response) => {
            Swal.fire(response.data)
            setCounter(counter+1)
        })
        .catch((error) => {
            console.log(error , 'failed to remove task');
        })
    }
    
    console.log(tasks , '----');
    return(
        <div className='list'>
            <h1>Your todo list</h1>
            <input type='text' value={task} onChange={(e)=>{setTask(e.target.value)}}></input> <button onClick={addTask}>Save Task</button>
            <ul>
                {tasks.map((Element , index) => {
                    return(
                    <li key ={index}>{Element}  <span onClick={getContent}> &#10004;</span> <span id={index} onClick={deleteTask}>&#10006;</span></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Todo