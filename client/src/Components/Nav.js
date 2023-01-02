import {useState} from 'react'
import LoginForm from './LoginForm'

function Nav ({setCurrentUser, setErrors, errors, currentUser, handleLogOut}) {

    const [displayForm, setDisplayForm ] = useState(false)

    const handleDisplayForm = ()=> {
        setDisplayForm(!displayForm)
    }

if (currentUser) return <button id='logout-button' onClick={handleLogOut}>Log me out plz</button>

    return(
        <div id='nav'>
            <h1 onClick={handleDisplayForm}>(This is the nav) Login baby!</h1>
            {displayForm ? <LoginForm setCurrentUser={setCurrentUser} setErrors={setErrors} errors={errors}/>:
             null 
             }
        </div>
    )
}

export default Nav;