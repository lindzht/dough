import {useState} from 'react';

function NewExpenseForm (){
    // Form to track new expense details
    const [expense, setExpense] = useState({
        item: "",
        cost: 0,
        date: "",
        category: ""
        // note: ""
    })

    const handleExpenseForm = (e) => {
        e.preventDefault();

    }

    const handleNewExpense = () => {}

    return(
        <div id="new-expense-form-container">
            <div id="new-expense-form">
                <form onSubmit={handleNewExpense}>
                    Item:<input
                        type="string"
                        name="item"
                        value={expense.item}
                        onChange={handleExpenseForm}
                    />
                    Cost:<input
                        type="number"
                        name="cost"
                        value={expense.cost}
                        onChange={handleExpenseForm}
                    />
                    Date of Expense:<input
                        type="date"
                        name="date"
                        value={expense.date}
                        onChange={handleExpenseForm}
                    />
                    Category:<input
                        type=""
                        name=""
                        value={expense.category}
                        onChange={handleExpenseForm}
                    />
                    {/* Note:<input></input> */}
                </form>
            </div>
        </div>
    )
}

export default NewExpenseForm;
{/* <h1>New Expense Form</h1> */}