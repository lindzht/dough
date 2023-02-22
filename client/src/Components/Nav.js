
import { Outlet, Link } from 'react-router-dom';

import { Dropdown, Image, Menu } from 'semantic-ui-react';
import LoginForm from './LoginForm'
import DoughLine from '../images/DoughLine.png';
import DoughDoughnut from '../images/DoughDoughnut.png';
import DoughArc from '../images/DoughArc.png';


function Nav ({currentUser, handleDisplayForm, setCurrentUser, handleLogOut, setErrors}) {
    
    const handleClearErrors = () => {
        setErrors([]);
    }

    const HiddenNav = () => {
        return (
            <> 
                <Menu.Item>
                    <Link to="/dashboard">
                        <Image src={DoughLine} size="small" onClick={handleClearErrors}/>
                        {/* <Image src={DoughDoughnut} size="tiny" /> */}
                    </Link>
                </Menu.Item>
                <Dropdown item text='Navigate'>
                    <Dropdown.Menu>
                        <Link to="/dashboard">
                            <Dropdown.Item text='Dashboard'onClick={handleClearErrors}/>
                        </Link>
                        {/* <Link to="/prev">
                            <Dropdown.Item text='Previous Month'/>
                        </Link> */}
                        <Link to="/categories">
                            <Dropdown.Item text='Categories'onClick={handleClearErrors}/>
                        </Link>
                        {/* <Link to="/savings">
                            <Dropdown.Item text='Savings'/>
                        </Link> */}     
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown item text='Expense'>
                    <Dropdown.Menu>
                        <Link to="/expenses">
                            <Dropdown.Item onClick={handleClearErrors}>All Expenses</Dropdown.Item>
                        </Link>
                        <Link to="/new">
                            <Dropdown.Item text='Add New Expense'onClick={handleClearErrors}/>
                        </Link>
                    </Dropdown.Menu>
                </Dropdown>
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
                { currentUser && currentUser ? <HiddenNav /> : 
                 <> 
                    <Menu.Item>
                        <Link to="/">
                            {/* <Image src={DoughDoughnut} size="tiny" /> */}
                            {/* <Image src={DoughArc} size="small" /> */}
                            <Image src={DoughLine} size="small" />
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