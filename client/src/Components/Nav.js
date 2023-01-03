import {useState} from 'react'
import { Dropdown, Menu } from 'semantic-ui-react';
import LoginForm from './LoginForm'

function Nav ({currentUser, handleLogOut, handleDisplayForm}) {


    // if (currentUser) return <button id='logout-button' onClick={handleLogOut}>Log me out plz</button>
    if (!currentUser) {
        return (
            <Menu>
                <Menu.Item onClick={handleDisplayForm}>
                    Login baby!
                </Menu.Item>
            </Menu> 
        )
    } else {
        return(
            <>
                <Menu>
                    <Dropdown item text='Dashboard'>
                        <Dropdown.Menu>
                            <Dropdown.Item text='Previous Month'/>
                            <Dropdown.Item text='Categories'/>
                            <Dropdown.Item text='Savings'/>
                            <Dropdown.Item text='Add New Expense'/>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item>
                        All Expenses
                    </Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item onClick={handleLogOut}>
                            Logout
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </>
        )
    }
}

export default Nav;