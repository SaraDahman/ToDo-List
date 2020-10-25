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
        <div className='buttons'>
            <button name = 'signup' onClick={click}> Sign up </button>
            <br />
            <button name = 'signin' onClick={click}> Sign in </button>
        </div>
    )
}

export default Landing;