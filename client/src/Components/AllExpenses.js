import { Container, Table } from 'semantic-ui-react';
import ExpenseItem from './ExpenseItem';

function AllExpenses({expenses}) {

    const expenseArray = expenses.map((eachExpense) => {
        return( <ExpenseItem key={eachExpense.id} {...eachExpense}/>)
    })

    return (
        <div>
            <h1>Expenses Bitches</h1>
            <Container>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Item</Table.HeaderCell>
                            <Table.HeaderCell>Cost</Table.HeaderCell>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {expenseArray}
                </Table>
            </Container>
        </div>
    )
};

export default AllExpenses;