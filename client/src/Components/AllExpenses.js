import { Container, Table } from 'semantic-ui-react';
import ExpenseItem from './ExpenseItem';

function AllExpenses({expenses, setUpdatedExpenses}) {

    // console.log(expenses)
    const expenseArray = expenses.map((eachExpense) => {
        return( <ExpenseItem 
            {...eachExpense} 
            key={eachExpense.id} 
            setUpdatedExpenses={setUpdatedExpenses}
            allExpenses={expenses}/>)
    })

    return (
        <div id="all-expense-table">
            <h1>Expenses Bitches</h1>
            <Container>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Item</Table.HeaderCell>
                            <Table.HeaderCell>Cost</Table.HeaderCell>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell>Category</Table.HeaderCell>
                            <Table.HeaderCell>Type</Table.HeaderCell>
                            <Table.HeaderCell>Edit</Table.HeaderCell>
                            <Table.HeaderCell>Delete</Table.HeaderCell>
                            {/* <Table.HeaderCell>Change</Table.HeaderCell> */}
                        </Table.Row>
                    </Table.Header>
                    {expenseArray}
                </Table>
            </Container>
        </div>
    )
};

export default AllExpenses;