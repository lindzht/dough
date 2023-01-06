import { Link } from "react-router-dom";
import { Icon, Divider, Container, Grid, Header, Segment, Table, Button } from "semantic-ui-react";


function Dashboard ({expenses, currentUser}){


    const miniExpenseArray = expenses.slice(0,5).map((ex)=>{
        return (
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{ex.item}</Table.Cell>
                        <Table.Cell>${ex.cost}</Table.Cell>
                        <Table.Cell>{ex.date_of_expense}</Table.Cell>
                        <Table.Cell>{ex.category.category_name}</Table.Cell>
                        <Table.Cell>{ex.category.cat_type}</Table.Cell>
                    </Table.Row>
                </Table.Body>
        )
    });



    return(
        <div>
            <div id="dash-div-head-container">
                <div className="dash-header">
                    <h1>Welcome to your Dashboard, {currentUser && currentUser.name}!</h1>
                </div>
            </div>
            <Grid container columns={2} divided>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Segment>
                            <div>
                                <Container>
                                    <h2>Recent Expenses
                                        <Link to="/new">
                                            <Button circular icon="plus" floated="right"/>
                                        </Link>
                                    </h2>
                                    <Table>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell>Item</Table.HeaderCell>
                                                <Table.HeaderCell>Cost</Table.HeaderCell>
                                                <Table.HeaderCell>Date</Table.HeaderCell>
                                                <Table.HeaderCell>Category</Table.HeaderCell>
                                                <Table.HeaderCell>Type</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        {miniExpenseArray}
                                    </Table>
                                </Container>
                            </div>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column textAlign="center">                         
                        <Segment>
                            <br/>
                            <u><Header position="middle" as='h2'>Monthly Income:</Header></u>
                            <p className="dash-h1">${currentUser && currentUser.income}</p>               
                        </Segment>                          
                        <Segment>
                            <u><Header position="middle" as='h2'>Accumulated Expenses This Month:</Header></u>
                            <p className="dash-h1">${currentUser && currentUser.sum_of_expenses}</p>   
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>


        </div>
    )
};

export default Dashboard;