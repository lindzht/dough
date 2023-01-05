import {useState} from 'react'
import { Outlet, Link } from 'react-router-dom';
import { Dropdown, Image, Menu } from 'semantic-ui-react';
import LoginForm from './LoginForm'
import DoughLine from '../images/DoughLine.png';
import DoughDoughnut from '../images/DoughDoughnut.png';
import DoughArc from '../images/DoughArc.png';

function Nav ({currentUser, handleLogOut, handleDisplayForm}) {

    const HiddenNav = () => {
        return (
            <> 
                <Menu.Item>
                    <Link to="/dashboard">
                        <Image src={DoughLine} size="small" />
                        {/* <Image src={DoughDoughnut} size="tiny" /> */}
                    </Link>
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
                        <Link to="/">
                            Logout
                        </Link>
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
                        <Link to="/">
                            <Image src={DoughDoughnut} size="tiny" />
                            {/* <Image src={DoughArc} size="small" /> */}
                            {/* <Image src={DoughLine} size="small" /> */}
                        </Link>
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