import {useState} from 'react'
import LoginForm from './LoginForm'

function Nav ({currentUser, handleLogOut, handleDisplayForm}) {


if (currentUser) return <button id='logout-button' onClick={handleLogOut}>Log me out plz</button>

    return(
        <div id='nav'>
            <h3 onClick={handleDisplayForm}>Login baby!</h3>
            {/* {displayForm ? <LoginForm setCurrentUser={setCurrentUser} setErrors={setErrors} errors={errors}/>:
             null 
             } */}
        </div>
    )
}

export default Nav;