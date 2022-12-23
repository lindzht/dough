import './App.css';
import {useState} from 'react'
import SignupLoginForm from './Components/SignupLoginForms';

function App() {

  const [errors, setErrors] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  return (
    <div className="App">
      
      <h1>SUP BUTTS</h1>
      <SignupLoginForm setCurrentUser={setCurrentUser} setErrors={setErrors} errors={errors}/>
    </div>
  );
}

export default App;
