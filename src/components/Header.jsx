import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { FaRegSun } from "react-icons/fa";
import { BiSolidMoon } from "react-icons/bi";
import logo from '../images/logocc.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext'
import { logout as apiLogout } from '../api/apipart';
import { useAuth } from '../contexts/AuthContext';


function Header() {
    const { isDarkMode, toggleMode } = useTheme();
    const { logout } = useAuth();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            // Call the API logout function
            const message = await apiLogout();
            console.log(message); // Logged out successfully
    
            // Clear user info from context and local storage
            logout();
    
            // Redirect to the login page or home page after logout
            navigate('/');
        } catch (error) {
            console.error('Logout failed', error);
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const queryTerm = event.target.search.value;
        event.target.reset();
        return navigate(`/search?q=${queryTerm}`);
    }
    return (
        <header>
            {/* https://react-bootstrap.github.io/docs/components/navbar */}
            <Navbar bg='' variant='light' expand='lg' collapseOnSelect className={isDarkMode ? "myCustomNavbarDark" : "myCustomNavbar"}>
                <Container>
                    <Navbar.Brand as={NavLink} to='/'>
                        <img src={logo} alt='Content Craft' />
                        <span className={`brand-name ${isDarkMode ? "myCustomNavbarDark" : "myCustomNavbar"}`}>Content Craft</span>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Form style={{ margin: '0px 10px 0px 40px' }} onSubmit={handleSubmit} className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search Movies..."
                                className="me-2"
                                aria-label="Search"
                                name='search'
                            />
                            <Button style={{ color: isDarkMode ? 'white' : 'black' }} variant="outline-secondary" type="submit">Search</Button>
                        </Form>
                        <Nav className='ms-auto'>
                            {isDarkMode ? (
                                <FaRegSun style={{ marginRight: '20px', width: '25px', height: '25px', color: 'white', padding: '5px', border: '1px solid grey', cursor: 'pointer' }} onClick={toggleMode} />
                            ) : (

                                <BiSolidMoon style={{ marginRight: '20px', width: '25px', height: '25px', color: 'black', padding: '5px', border: '1px solid grey', cursor: 'pointer' }} onClick={toggleMode} />
                            )}
                        </Nav>
                        <Nav className='ms-auto ' >
                            <Nav.Link style={{ color: isDarkMode ? 'white' : 'black' }} as={NavLink} to='/'>Home</Nav.Link>
                            <Nav.Link style={{ color: isDarkMode ? 'white' : 'black' }} as={NavLink} to='/movies/popular'>Popular </Nav.Link>
                            <Nav.Link style={{ color: isDarkMode ? 'white' : 'black' }} as={NavLink} to='/movies/top'>Top Rated</Nav.Link>
                            <Nav.Link style={{ color: isDarkMode ? 'white' : 'black' }} as={NavLink} to='/movies/upcoming'>Upcoming</Nav.Link>
                            {false ? (
                                <>
                                    <NavDropdown title={userInfo.name} id='username'>
                                        <NavDropdown.Item as={NavLink} to='/profile'>
                                            Profile
                                        </NavDropdown.Item>
                                        <NavDropdown.Item onClick={logoutHandler}>
                                            Logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </>
                            ) : (
                                <Nav.Link as={NavLink} to='/login'>
                                    <FaUser /> Sign In
                                </Nav.Link>
                            )}
                        </Nav>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
