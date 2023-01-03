import {useState} from 'react';
import { Form, Input, Button, Container } from 'semantic-ui-react';

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
            <Container>
                <Form onSubmit={handleNewExpense}>
                    <Form.Field
                        control={Input}
                        label="Item"
                        type="item"
                        name="item"
                        placeholder="What did you pay for? be fr"
                        value={expense.item}
                        onChange={handleExpenseForm}
                    />
                    <Form.Field
                        control={Input}
                        label="Cost"
                        type="cost"
                        name="cost"
                        value={expense.cost}
                        onChange={handleExpenseForm}
                    />
                     <Form.Field
                        control={Input}
                        label="Date of Expense"
                        type="date"
                        name="date-of-expense"
                        value={expense.date}
                        onChange={handleExpenseForm}
                    />
                    <Form.Field
                        control={Input}
                        label="Category"
                        type="category"
                        name="category"
                        value={expense.category}
                        onChange={handleExpenseForm}
                    />
                    {/* Note:<input></input> */}
                </Form>
            </Container>
        </div>
    )
}

export default NewExpenseForm;
{/* <h1>New Expense Form</h1> */}