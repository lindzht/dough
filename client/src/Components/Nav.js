import {useState} from 'react'
import { Outlet, Link } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react';
import LoginForm from './LoginForm'

function Nav ({currentUser, handleLogOut, handleDisplayForm}) {

    const HiddenNav = () => {
        return (
            <> 
                <Menu.Item>
                    DoUgH
                </Menu.Item>
                <Dropdown item text='Navigate'>
                    <Dropdown.Menu>
                        <Link to="/dashboard">
                            <Dropdown.Item text='Dashboard'/>
                        </Link>
                        <Link to="/prev">
                            <Dropdown.Item text='Previous Month'/>
                        </Link>
                        <Link to="/categories">
                            <Dropdown.Item text='Categories'/>
                        </Link>
                        <Link to="/savings">
                            <Dropdown.Item text='Savings'/>
                        </Link>
                        <Link to="/new">
                            <Dropdown.Item text='Add New Expense'/>
                        </Link>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Item>
                    <Link to="/expenses">
                        All Expenses
                    </Link>
                </Menu.Item>
                <Menu.Menu position="right">
                    <Menu.Item onClick={handleLogOut}>
                        Logout
                    </Menu.Item>
                </Menu.Menu>
            </>
        )
    }


    return(
        <>
            <Menu>
                { currentUser ? <HiddenNav /> : 
                 <> 
                    <Menu.Item>
                        DoUgH
                    </Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item onClick={handleDisplayForm}>
                            <Link to="/login">
                                Login baby!
                            </Link>
                        </Menu.Item>
                    </Menu.Menu>
                 </> 
                }
            </Menu>
            <Outlet />
        </>
    )
}

export default Nav;