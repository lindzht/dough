import {useState} from 'react';
import { Form, Input, Button, Container } from 'semantic-ui-react';

function SignupForm ({handleFormDisplay, setCurrentUser, setErrors, errors, handleDisplayForm, navigate}) {

    const [newUser, setNewUser] = useState({
        username: "",
        name: "",
        income: "",
        password: "", 
        password_confirmation: ""
    })

    const handleSignup = (e) => {
        console.log(newUser);
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(newUser)
        })
        .then(res => {
            if(res.ok){
                res.json().then(setCurrentUser)
                handleDisplayForm();
                navigate('/');
            } else {
                res.json().then(data => setErrors(data.errors))
            }
        })
        setNewUser({
            username: "",
            name: "",
            income: "",
            password: "", 
            password_confirmation: ""
        })
    }
    // console.log(errors)

    const handleChange = (e) => { 
        const key = e.target.name;
        const value = e.target.value;

        setNewUser({
            ...newUser, 
            [key]: value
        })
    }


    return(

        <div id="signup-container">
            <Container> 
                <Form onSubmit={handleSignup}>
                    <Form.Field
                        control={Input}
                        label="Username:"
                        type="username"
                        name="username"
                        value={newUser.username}
                        onChange={handleChange}
                    />
                    <Form.Field 
                        control={Input}
                        label="Name:"
                        type="name"
                        name="name"
                        value={newUser.name}
                        onChange={handleChange}
                    />
                    <Form.Field 
                        control={Input}
                        label="Income:"
                        type="number"
                        name="income"
                        placeholder='$'
                        value={newUser.income}
                        onChange={handleChange}
                    />
                    <Form.Field 
                        control={Input}
                        label="Password:"
                        type="password"
                        name="password"
                        value={newUser.password}
                        onChange={handleChange}
                    />
                    <Form.Field 
                        control={Input}
                        label="Password Confirmation:"
                        type="password"
                        name="password_confirmation"
                        value={newUser.password_confirmation}
                        onChange={handleChange}
                    />
                    <Form.Button type="submit">Submit</Form.Button>
                    JK I have an account!
                    <br/>
                    <Button onClick={handleFormDisplay}>Login</Button>
                    <div id="errors-container">
                        {errors ? 
                        errors.map(e => {
                            return <p key={e}>{e}</p>})
                        : null
                        }
                    </div>
                </Form>
            </Container>
        </div>      
    )
}

export default SignupForm;