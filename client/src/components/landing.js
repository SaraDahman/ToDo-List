import React from 'react'

function Landing(props){

    let click = (e) =>{
        if(e.target.name === 'signup'){
            props.history.push('/signup')
        } else {
            props.history.push('/signin')
        }
    }

    return(
        <div className='firstPage'>
            <p>Keep Track of Your Todos</p>
            <div className='buttons'>
                <button name = 'signup' onClick={click}> Sign up </button>
                <br />
                <button name = 'signin' onClick={click}> Sign in </button>
            </div>
        </div>
    )
}

export default Landing;