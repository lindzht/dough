import { Table } from "semantic-ui-react";
import {useParams} from "react-router-dom";
import {useState} from 'react'


function ExpenseItem({id, item, cost, date_of_expense, category}) {
    const [displayForms, setDisplayForms] = useState(false);
    const [updatedExpense, setUpdatedExpense] = useState({
        item: {item},
        cost: {cost},
        date_of_expense: {date_of_expense},
        // category_name: {category.category_name}
    })

    console.log(updatedExpense)

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
            method: "DELETE",
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
        // .then(res => {
        //     if(res.ok){
        //         res.json().then(data => {([...all])})
        //     }
        // })
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
                                placeholder="Update item"
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
{/* <i class="edit icon"></i> */}
{/* <i class="edit outline icon"></i> */}
{/* <i class="trash alternate icon"></i>
<i class="eraser icon"></i> */}
{/* <i class="pencil alternate icon"></i> */}
{/* <i class="trash icon"></i> */}
{/* <i class="x icon"></i> */}
{/* <Table.Cell>
<form>
    <input
        id="item"
        name="item"
        value={updatedExpense.item}
        onChange={handleChange}
    />
    <input/>
    <input/>
</form>
</Table.Cell> */}

{/* <Table.Body>
    <Table.Row>
        
        <Table.Cell>
            <form>
                <input/>
            </form>
        </Table.Cell>
        <Table.Cell>
            <form>
                <input/>
            </form>
        </Table.Cell>
        <Table.Cell>
            <form>
                <input/>
            </form>
        </Table.Cell>
        <Table.Cell>
            <form>
                <select/>
            </form>
        </Table.Cell>
        <Table.Cell>
        <input className="button" type="submit" />
        </Table.Cell>
    </Table.Row>
</Table.Body> */}