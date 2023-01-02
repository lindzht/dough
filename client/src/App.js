import './App.css';
import {useState, useEffect} from 'react'
import SignupLoginForm from './Components/SignupLoginForms';
import LoginForm from './Components/LoginForm';
import Nav from './Components/Nav';

function App() {

  const [errors, setErrors] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [displayForms, setDisplayForms ] = useState(false)


  //STAY LOGGED IN:
  useEffect(() => {
    fetch("/me")
    .then(res => {
      if(res.ok){
        res.json()
        .then(user => {
          setCurrentUser(user)
          console.log(currentUser)
        })
      }
    })
  }, []);

  //LOGOUT: 
  const handleLogOut =()=> {
    fetch("/logout", {
      method: "DELETE"
    })
    .then(res => {
      if(res.ok) {
        setCurrentUser(null)
      }
    })
  }

  const handleDisplayForm = ()=> {
    setDisplayForms(!displayForms)
}


return (
    <div className="App">

      <Nav 
        setCurrentUser={setCurrentUser} 
        currentUser={currentUser}
        setErrors={setErrors} 
        errors={errors} 
        handleLogOut={handleLogOut}
        handleDisplayForm={handleDisplayForm}/>

      <h1>SUP {currentUser? currentUser.username : "STRANGER"}</h1>
      <h3> Basic home stuff is here! </h3>
      {!currentUser ? <h4>Go fucking login!</h4> : <h4>Oh shit you're logged! Let's redirect you to other components somehow</h4> }

      {displayForms ? <LoginForm setCurrentUser={setCurrentUser} setErrors={setErrors} errors={errors}/> : null }



    </div>
  );
}

export default App;
