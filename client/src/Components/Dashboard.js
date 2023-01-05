import { Container, Header, Table } from "semantic-ui-react";


function Dashboard ({expenses}){

    const miniExpenseArray = expenses.slice(0,5).map((ex)=>{
        return (
            <>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{ex.item}</Table.Cell>
                        <Table.Cell>{ex.cost}</Table.Cell>
                        <Table.Cell>{ex.date_of_expense}</Table.Cell>
                        <Table.Cell></Table.Cell>
                    </Table.Row>
                </Table.Body>
            </>
        )
    });


    return(
        <div>
            <h1>This is your dashboard fucker!</h1>
            <div>
                <Container>
                    <Header>Recent Expenses</Header>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Item</Table.HeaderCell>
                                <Table.HeaderCell>Cost</Table.HeaderCell>
                                <Table.HeaderCell>Date</Table.HeaderCell>
                                <Table.HeaderCell>Category</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        {miniExpenseArray}
                    </Table>
                </Container>
            </div>
        </div>
    )
};

export default Dashboard;