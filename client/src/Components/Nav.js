
import { Outlet, Link } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

function Nav ({currentUser, handleDisplayForm, setCurrentUser}) {

    let navigate = useNavigate();
    
    //LOGOUT: 
    const handleLogOut =()=> {
        fetch("/logout", {
        method: "DELETE"
        })
        .then(res => {
        if(res.ok) {
            setCurrentUser(null)
            navigate('/');
        }
        })
    }

    const HiddenNav = () => {
        return (
            <> 
                <Menu.Item>
                    <Link to="/dashboard">
                        DoUgH
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
                        <Link to="/">
                            DoUgH
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