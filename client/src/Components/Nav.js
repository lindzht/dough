import {useState} from 'react'
import { Outlet, Link } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react';
import LoginForm from './LoginForm'

function Nav ({currentUser, handleLogOut, handleDisplayForm}) {


    // if (currentUser) return <button id='logout-button' onClick={handleLogOut}>Log me out plz</button>
    // if (!currentUser) {
    //     return (
    //         <Menu>
    //             <Menu.Item onClick={handleDisplayForm}>
    //                 <Link to="/login">
    //                     Login baby!
    //                 </Link>
    //             </Menu.Item>
    //         </Menu> 
    //     )
    // } else {
        

    const HiddenNav = () => {
        return (
        <> 
            <Dropdown item text='Dashboard'>
                    <Dropdown.Menu>
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
        </>)
    }


    return(
        <>
            <Menu>
                
                { currentUser ? <HiddenNav /> : 
                 <> 
                    <Menu.Item onClick={handleDisplayForm}>
                        <Link to="/login">
                            Login baby!
                        </Link>
                    </Menu.Item>
                 </> 
                }
            </Menu>
            <Outlet />
        </>
    )
}

export default Nav;