import {useState} from 'react';
import { Divider, Header, Container, Form, Input, Button, Image, Segment } from 'semantic-ui-react';
import SignupForm from './SignupForm';
import { Link, useNavigate } from 'react-router-dom';
import DoughLine from '../images/DoughLine.png';


function LoginForm ({setErrors, errors, setCurrentUser, handleDisplayForm}) {
    let navigate = useNavigate();
    const [displaySignup, setDisplaySignup] = useState(false);

    const handleSignupFormDisplay = () => {
        console.log("are you working")
        setErrors([]);
        setDisplaySignup(!displaySignup);
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
                    navigate('/dashboard');
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

    const handleClearErrors = () => {
        setErrors([]);
    }



if (displaySignup) return <SignupForm handleFormDisplay={handleSignupFormDisplay} setErrors={setErrors} errors={errors} setCurrentUser={setCurrentUser} handleDisplayForm={handleDisplayForm} navigate={navigate}/>
    return(
        <div id="login-container">
            <div className="login-header">
                <Image src={DoughLine} size="large"/>
            </div>
            <br/>
            <div className="login-header">
                <Header size="huge">Please Login!</Header>
            </div>
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
                    <p id='login-p'>Username & Password Are Case Sensitive</p>
                    <div id="errors-container">
                        {errors ? <p className="errors">{errors}</p> : null}
                    </div>
                    <Form.Button type="submit">Login</Form.Button> 
                    
                    <Divider horizontal>Or</Divider>
                    
                    Don't have an account?
                    <br/>
                    <br/>
                    <Link to="/signup">
                        <Button onClick={handleClearErrors}>Sign Up</Button>
                    </Link>
                    
                </Form>
            </Container>
        </div>      
    )
}

export default LoginForm;