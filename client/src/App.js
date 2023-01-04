import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react'
import Nav from './Components/Nav';
import Dashboard from './Components/Dashboard';
import LandingPage from './Components/LandingPage';
import NewExpenseForm from './Components/NewExpenseForm';
import PrevMonth from './Components/PrevMonth';
import Savings from './Components/Savings';
import Categories from './Components/Categories';
import AllExpenses from './Components/AllExpenses';
import LoginForm from './Components/LoginForm';


function App() {

  const [errors, setErrors] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [displayForms, setDisplayForms ] = useState(false)

  // const navigate = useNavigate();

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Nav  
            currentUser={currentUser}
            setErrors={setErrors
            } 
            errors={errors} 
            handleLogOut={handleLogOut}
            handleDisplayForm={handleDisplayForm}
            />
        }>
          <Route index element={<LandingPage currentUser={currentUser}  setCurrentUser={setCurrentUser} setErrors={setErrors} errors={errors}/>}/>
          <Route path="dashboard" element={<Dashboard />}/>
          <Route path="expenses" element={<AllExpenses/>}/>
          <Route path="prev" element={<PrevMonth />}/>
          <Route path="categories" element={<Categories setErrors={setErrors}  errors={errors} />}/>
          <Route path="savings" element={<Savings />}/>
          <Route path="new" element={<NewExpenseForm />}/>
          <Route path="login" element={<LoginForm 
            setCurrentUser={setCurrentUser} 
            currentUser={currentUser}
            setErrors={setErrors} 
            errors={errors} 
            handleLogOut={handleLogOut}
            handleDisplayForm={handleDisplayForm} />
            } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
