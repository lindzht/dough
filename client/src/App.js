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
import SignupForm from './Components/SignupForm';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';


function App() {

  const [render, setRender] = useState([])

  const [errors, setErrors] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [displayForms, setDisplayForms ] = useState(false)
  const [expenses, setExpenses] = useState([])
  const [updatedExpenses, setUpdatedExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [updatedCategories, setUpdatedCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({
    category_name: "",
    cat_type: ""
  })
  const [newExpense, setNewExpense] = useState({
    item: "",
    cost: 0,
    category_id: ""
})

  //STAY LOGGED IN:
  useEffect(() => {
    fetch("/me")
    .then(res => {
      if(res.ok){
        res.json()
        .then(user => {
          setCurrentUser(user)
          console.log(user)
        })
      }
    });
  }, [render]);

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
      setErrors([]);
  }

  //FETCH CATEGORIES FOR USER
  useEffect(() => {
    fetch("/categories")
    .then(res => {
      if(res.ok){
        res.json()
        .then(data => {
          setCategories(data)
        })
      }
    })
  }, [currentUser, newCategory, updatedCategories]);


  //FETCH EXPENSES FOR USER
  useEffect(() => {
    fetch("/expenses")
    .then(res => {
      if(res.ok){
        res.json()
        .then(data => {
          setExpenses(data)
        })
      }
    })
  }, [currentUser, newExpense, updatedExpenses, updatedCategories]);



  const handleDisplayForm = ()=> {
    setDisplayForms(!displayForms)
    setErrors([]);
    console.log("are you working??")
}


return (
    <BrowserRouter>
    <div id='app-container'>   
      <Routes>
        <Route path="/" element={
          <Nav  
            currentUser={currentUser}
            setErrors={setErrors} 
            errors={errors} 
            handleDisplayForm={handleDisplayForm}
            setCurrentUser={setCurrentUser}
            handleLogOut={handleLogOut}/>}>
          <Route index element={<LandingPage 
            currentUser={currentUser}  
            setCurrentUser={setCurrentUser} 
            setErrors={setErrors} 
            errors={errors}/>}/>
          <Route path="dashboard" element={<Dashboard 
            currentUser={currentUser} 
            expenses={expenses}/>}/>
          <Route path="expenses" element={<AllExpenses
            setRender={setRender} 
            errors={errors} 
            setErrors={setErrors} 
            expenses={expenses} 
            setUpdatedExpenses={setUpdatedExpenses}/>}/>
          <Route path="prev" element={<PrevMonth />}/>
          <Route path="categories" element={<Categories 
            setErrors={setErrors}  
            errors={errors} 
            newCategory={newCategory} 
            setNewCategory={setNewCategory}
            allCategories={categories}
            setCategories={setCategories}
            setUpdatedCategories={setUpdatedCategories}/>}/>
          {/* <Route path="savings" element={<Savings />}/> */}
          <Route path="new" element={<NewExpenseForm setRender={setRender} setErrors={setErrors} errors={errors} categories={categories} newExpense={newExpense} setNewExpense={setNewExpense}/>}/>
          <Route path="login" element={<LoginForm 
            setCurrentUser={setCurrentUser} 
            currentUser={currentUser}
            setErrors={setErrors} 
            errors={errors} 
            handleDisplayForm={handleDisplayForm} />}/>
          <Route path="signup" element={<SignupForm 
            setErrors={setErrors} 
            errors={errors}
            setCurrentUser={setCurrentUser}/>}/>
          <Route path="*" element={<NotFound />}/>
        </Route>  
      </Routes>
      </div>    
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
