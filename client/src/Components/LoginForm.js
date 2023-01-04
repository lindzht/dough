import {useState} from 'react';
import { Container, Form, Input, Button } from 'semantic-ui-react';
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
        setUser({
            username: "",
            password: ""
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

            <Container id="login-form"> 
                <Form onSubmit={handleLogin}>
                    <Form.Field 
                        control={Input}
                        label="Username:"
                        name="username"
                        placeholder="Username"
                        value={user.username}
                        onChange={handleChange}
                    />
                    <Form.Field 
                        control={Input}
                        label="Password:"
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                    <Form.Button type="submit">Login</Form.Button>  
                    Don't have an account?
                    <br/>
                    <Button onClick={handleSignupFormDisplay}>Sign Up</Button>
                    <div id="errors-container">
                        {errors ? <p>{errors}</p> : null}
                    </div>
                </Form>
            </Container>
        </div>      
    )
}

export default LoginForm;