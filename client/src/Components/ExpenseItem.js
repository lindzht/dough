import { Table } from "semantic-ui-react";


function ExpenseItem({item, cost, date_of_expense}) {


    return (
        <>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>{item}</Table.Cell>
                    <Table.Cell>${cost}</Table.Cell>
                    <Table.Cell>{date_of_expense}</Table.Cell>
                </Table.Row>
            </Table.Body>
        </>
    )
};

export default ExpenseItem;