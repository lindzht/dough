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
  const [expenses, setExpenses] = useState([])
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({
    category_name: "",
    cat_type: ""
})
console.log(categories)

  // const navigate = useNavigate();

  //STAY LOGGED IN:
  useEffect(() => {
    fetch("/me")
    .then(res => {
      if(res.ok){
        res.json()
        .then(user => {
          setCurrentUser(user)
          // console.log(currentUser)
        })
      }
    });

    fetch("/expenses")
    .then(r=>r.json())
    .then(setExpenses)
  }, []);



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
  }, [newCategory]);

  const handleDisplayForm = ()=> {
    setDisplayForms(!displayForms)
}


return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Nav  
            currentUser={currentUser}
            setErrors={setErrors} 
            errors={errors} 
            handleDisplayForm={handleDisplayForm}
            setCurrentUser={setCurrentUser}
            />
          }>
          <Route index element={<LandingPage currentUser={currentUser}  setCurrentUser={setCurrentUser} setErrors={setErrors} errors={errors}/>}/>
          <Route path="dashboard" element={<Dashboard />}/>

          <Route path="expenses" element={<AllExpenses expenses={expenses} setErrors={setErrors} errors={errors} />}/>

          <Route path="prev" element={<PrevMonth />}/>
          <Route path="categories" element={<Categories 
            setErrors={setErrors}  
            errors={errors} 
            categories={categories} 
            setCategories={setCategories}
            newCategory={newCategory}
            setNewCategory={setNewCategory}
            />}/>
          <Route path="savings" element={<Savings />}/>
          <Route path="new" element={<NewExpenseForm 
            setErrors={setErrors}  
            errors={errors} 
            categories={categories} 
          />}/>
          <Route path="login" element={<LoginForm 
            setCurrentUser={setCurrentUser} 
            currentUser={currentUser}
            setErrors={setErrors} 
            errors={errors} 
            handleDisplayForm={handleDisplayForm} />
            } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
