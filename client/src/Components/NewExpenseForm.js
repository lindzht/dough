import {useEffect, useState} from 'react';
import { Form, Input, Button, Container } from 'semantic-ui-react';

function NewExpenseForm ({setErrors, errors, categories}){

    // maps through categories array to show in dropdown menu
    const handleCategories = categories.map(c => {
            return (
                <option value={c.id} key={c.id}>
                    {c.category_name} 
                </option>
            )
    })

    // Form to track new expense details
    const [expense, setExpense] = useState({
        item: "",
        cost: 0,
        // needs to match column names in schema
        // date_of_expense: "",
        category_id: ""
        // note: ""
    })
    
    
    const handleExpenseForm = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setExpense({
            ...expense, 
            [key]: value
        })
    }

    const handleNewExpense = (e) => {
        e.preventDefault();
        console.log(expense)
        fetch("/expenses", {
            method: "POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(expense)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(console.log(expense))
            } else {
                res.json().then(console.log(errors))
            }
        })
    }

    return(
        <div id="new-expense-form-container">
            <form onSubmit={handleNewExpense}>
                <label>Item</label>
                <input
                    label="Item"
                    type="item"
                    name="item"
                    placeholder="What did you pay for? be fr"
                    value={expense.item}
                    onChange={handleExpenseForm}
                />
                <label>Cost</label>
                <input
                    label="Cost"
                    type="cost"
                    name="cost"
                    value={expense.cost}
                    onChange={handleExpenseForm}
                />
                <label>Date of Expense</label>
                <input
                    control={Input}
                    label="Date of Expense"
                    type="date"
                    name="date_of_expense"
                    value={expense.date}
                    onChange={handleExpenseForm}
                />
                <label>Category</label> 
                <select name="category_id" onChange={handleExpenseForm} value={expense.category_id}>
                    <option value="">Select</option>
                    {handleCategories}
                </select>
                {/* Note:<input></input> */}
                {/* <Form.Field control={Button}>Add New Expense</Form.Field> */}
                <input type="submit" value="Submit"></input>
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
{/* <h1>New Expense Form</h1> */}