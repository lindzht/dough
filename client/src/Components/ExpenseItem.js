import { Table } from "semantic-ui-react";
import {useParams} from "react-router-dom";
import {useState} from 'react'


function ExpenseItem({id, item, cost, date_of_expense, category, allExpenses, setUpdatedExpenses}) {
    const [displayForms, setDisplayForms] = useState(false);
    const [updatedExpense, setUpdatedExpense] = useState({
        item: item,
    })

    // TOGGLES IF EDIT BOTTON HAS BEEN CLICKED
    const displayEditInput = () => {
        setDisplayForms(!displayForms);
        console.log(displayForms)
    }

    // UPDATES STATE IF USER EDITS
    const handleChange = (e) => {
        setUpdatedExpense({
           ...updatedExpense,
            [e.target.name]: e.target.value
        })
    }

    const handleDelete = () => {
        fetch(`/expenses/${id}`, {
            method: "DELETE"
        })
        .then(res => {
            if (res.ok){
                res.json().then(data => {setUpdatedExpenses(data)})
            } else {
                res.json().then(console.log("no bueno"))
            }
        })
    }

    const handleEdit = (e) => {
        e.preventDefault();
        displayEditInput();
        fetch(`/expenses/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedExpense),
        })
        .then(res => {
            if(res.ok){
                res.json()
                .then(data => {setUpdatedExpenses([...allExpenses, data])})
            } else {
                res.json().then(console.log("uh oh"))
            }
        })
    }

    return (
        <>
        { !displayForms ? 
            <Table.Body>
                <Table.Row>
                    <Table.Cell>{item}</Table.Cell>
                    <Table.Cell>${cost}</Table.Cell>
                    <Table.Cell>{date_of_expense}</Table.Cell>
                    <Table.Cell>{category.category_name}</Table.Cell>
                    <Table.Cell>{category.cat_type}</Table.Cell>
                    <Table.Cell>
                        <div className="mini ui icon button">
                            <i className="pencil alternate icon" onClick={handleEdit}></i>
                        </div>
                    </Table.Cell>
                    <Table.Cell>
                        <div className="mini ui icon button">
                            <i className="trash icon" onClick={handleDelete}></i>
                        </div>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        : 
            <Table.Body>
                <Table.Row>
                    <Table.Cell>
                        <form onSubmit={handleEdit}>
                            <input
                                id="item"
                                name="item"
                                value={updatedExpense.item}
                                onChange={handleChange}
                            />
                            <input className="button" type="submit" />
                        </form>
                    </Table.Cell>
                    <Table.Cell>${cost}</Table.Cell>
                    <Table.Cell>{date_of_expense}</Table.Cell>
                    <Table.Cell>{category.category_name}</Table.Cell>
                </Table.Row>
            </Table.Body>

        }
        </>
    )
};

export default ExpenseItem;
