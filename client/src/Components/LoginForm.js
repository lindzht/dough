import {useState} from 'react';
import SignupLoginForms from './SignupLoginForms';


function LoginForm ({setErrors, errors, setCurrentUser}) {

    // const history = useHistory()

    const [displaySignup, setDisplaySignup] = useState(false);

    const handleFormDisplay = () => {
        setDisplaySignup(!displaySignup);
    }

    const [user, setUser] = useState({
        username: "",
        password: "", 
    })

    const handleSignup = (e) => {
        console.log(user);
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {setCurrentUser(user);
            }) 
            } else {
                res.json().then(data => setErrors(errors))
            }
        })
    }


    const handleChange = (e) => { 
        const key = e.target.name;
        const value = e.target.value;

        setUser({
            ...user, 
            [key]: value
        })
    }

if (displaySignup) return <SignupLoginForms handleFormDisplay={handleFormDisplay} setErrors={setErrors} errors={errors} setCurrentUser={setCurrentUser}/>
    return(
        <div id="login-container">
            <div id="login-form"> 
                <form onSubmit={handleSignup}>
                username:<input
                    type="username"
                    name="username"
                    value={user.username}
                    onChange={handleChange}/>
                password:<input 
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}/>
                <input 
                    type="submit"/>
                <h5 onClick={handleFormDisplay}>Don't have an account?</h5>
                </form>
            </div>
            <div id="errors-container">
                {errors ? 
                errors.map(e => {
                    return <p key={e}>{e}</p>})
                : null
                }
            </div>
        </div>      
    )
}

export default LoginForm;