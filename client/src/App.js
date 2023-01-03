import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState, useEffect} from 'react'
import Nav from './Components/Nav';
import Dashboard from './Components/Dashboard';
import LandingPage from './Components/LandingPage';
import NewExpenseForm from './Components/NewExpenseForm';
import PrevMonth from './Components/PrevMonth';
import Savings from './Components/Savings';
import Categories from './Components/Categories';
import AllExpenses from './Components/AllExpenses';

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Nav 
            setCurrentUser={setCurrentUser} 
            currentUser={currentUser}
            setErrors={setErrors} 
            errors={errors} 
            handleLogOut={handleLogOut}
            handleDisplayForm={handleDisplayForm}
            />
        }>
          <Route index element={currentUser? <Dashboard/> : <LandingPage currentUser={currentUser} displayForms={displayForms} handleDisplayForm={handleDisplayForm} setCurrentUser={setCurrentUser} setErrors={setErrors} errors={errors}/>}/>
          <Route path="all-expenses" element={<AllExpenses/>}/>
          <Route path="prev-month" element={<PrevMonth />}/>
          <Route path="categories" element={<Categories />}/>
          <Route path="savings" element={<Savings />}/>
          <Route path="new-expense" element={<NewExpenseForm />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
