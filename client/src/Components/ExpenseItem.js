import { Table } from "semantic-ui-react";


function ExpenseItem({item, cost, date_of_expense}) {


    return (
        <>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>{item}</Table.Cell>
                    <Table.Cell>${cost}</Table.Cell>
                    <Table.Cell>{date_of_expense}</Table.Cell>
                    <Table.Cell><i class="pencil alternate icon"></i></Table.Cell>
                    <Table.Cell><i class="trash icon"></i></Table.Cell>
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