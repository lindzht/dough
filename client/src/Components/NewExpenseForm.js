import {useEffect, useState} from 'react';
import { Form, Input, Button, Container } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';

function NewExpenseForm ({setErrors, errors, categories, newExpense, setNewExpense}){
    let navigate = useNavigate();
    // maps through categories array to show in dropdown menu
    const handleCategories = categories.map(c => {
            return (
                <option value={c.id}>
                    {c.category_name} 
                </option>
            )
    })

    // Form to track new expense details
    const handleExpenseForm = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setNewExpense({
            ...newExpense,
            [key]: value
        })
    }

    const handleNewExpense = (e) => {
        e.preventDefault();
        fetch("/expenses", {
            method: "POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(newExpense)
        })
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    setNewExpense(data);
                    navigate('/expenses')
                    setNewExpense({
                        item:"",
                        cost: 0,
                        category_id: ""
                    })
                }) 
            } else {
                res.json().then(console.log("no good"))
            }
        })
    }

    return(
        <div id="new-expense-form-container">
            <h1>Add a new expense!</h1>
            <form onSubmit={handleNewExpense}>
                <label>Item</label>
                <input
                    label="Item"
                    type="item"
                    name="item"
                    placeholder="What did you pay for? be fr"
                    value={newExpense.item}
                    onChange={handleExpenseForm}
                />
                <label>Cost</label>
                <input
                    label="Cost"
                    type="cost"
                    name="cost"
                    value={newExpense.cost}
                    onChange={handleExpenseForm}
                />
                <label>Date of Expense</label>
                <input
                    label="Date of Expense"
                    type="date"
                    name="date_of_expense"
                    value={newExpense.date}
                    onChange={handleExpenseForm}
                />
                <label>Category</label> 
                <select name="category_id" onChange={handleExpenseForm} value={newExpense.category_id}>
                    <option value="">Select</option>
                    {handleCategories}
                </select>
                <h4 onClick={()=> {navigate('/categories');}}>Don't see the category you want? Add a new one yo!</h4>
                <Button >Submit</Button>
                <div id="errors-container">
                    {errors ? 
                    errors.map(e => {
                        return <p key={e}>{e}</p>})
                    : null
                    }
                </div>
            </form>
        </div>
    )
}

export default NewExpenseForm;
