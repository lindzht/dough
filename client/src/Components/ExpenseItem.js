import { Table } from "semantic-ui-react";
import {useParams} from "react-router-dom";


function ExpenseItem({id, item, cost, date_of_expense}) {
    // const {id} = useParams();
    // const i = id
    const handleDelete = () => {
        fetch(`/expenses/${id}`, {
            method: "DELETE",
        })
    }

    const handleEdit = () => {
        console.log("edit")
        // fetch(`/expenses/${id}`, {
        //     method: "PUT",
        //     body: JSON.stringify(item),
        // })
    }

    return (
        <>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>{item}</Table.Cell>
                    <Table.Cell>${cost}</Table.Cell>
                    <Table.Cell>{date_of_expense}</Table.Cell>
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