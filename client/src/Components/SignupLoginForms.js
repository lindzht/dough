import {useState} from 'react';

function SignupLoginForms({setCurrentUser, setErrors, errors}) {

    const [newUser, setNewUser] = useState({
        username: "",
        name: "",
        password: "", 
        password_confirmation: ""
    })

    const handleSignup = (e) => {
        console.log(newUser);
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(newUser)
        })
        .then(res => {
            if(res.ok){
                res.json().then(setCurrentUser)
            } else {
                res.json().then(data => setErrors(data.errors))
            }
        })
        setNewUser({
            username: "",
            name: "",
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
            <div id="signup-form"> 
                <form onSubmit={handleSignup}>
                username:<input
                    type="username"
                    name="username"
                    value={newUser.username}
                    onChange={handleChange}/>
                name: <input
                    type="name"
                    name="name"
                    value={newUser.name}
                    onChange={handleChange}/>
                password:<input 
                    type="password"
                    name="password"
                    value={newUser.password}
                    onChange={handleChange}/>
                confirm password:<input 
                    type="password"
                    name="password_confirmation"
                    value={newUser.password_confirmation}
                    onChange={handleChange}/>
                <input 
                    type="submit"/>
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

export default SignupLoginForms;