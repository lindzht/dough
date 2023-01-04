import {useState} from 'react';
import SignupForm from './SignupForm';
import { useNavigate } from 'react-router-dom';


function LoginForm ({setErrors, errors, setCurrentUser, handleDisplayForm}) {
    let navigate = useNavigate();
    const [displaySignup, setDisplaySignup] = useState(false);

    const handleSignupFormDisplay = () => {
        setDisplaySignup(!displaySignup);
        setErrors([]);
    }

    const [user, setUser] = useState({
        username: "",
        password: "", 
    })

    const handleLogin = (e) => {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setCurrentUser(user);
                    handleDisplayForm();
                    navigate('/');
            }) 
            } else {
                res.json().then(data => {for (const key in data){setErrors(data[key]);}})
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



if (displaySignup) return <SignupForm handleFormDisplay={handleSignupFormDisplay} setErrors={setErrors} errors={errors} setCurrentUser={setCurrentUser} handleDisplayForm={handleDisplayForm} navigate={navigate}/>
    return(
        <div id="login-container">
            <div> 
                <form onSubmit={handleLogin}>
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
                <h5 onClick={handleSignupFormDisplay}>Don't have an account?</h5>
                <div id="errors-container">
                    {errors ? <p>{errors}</p> : null}
                </div>
                </form>
            </div>
        </div>      
    )
}

export default LoginForm;