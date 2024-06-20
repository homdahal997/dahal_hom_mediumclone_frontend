import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaRegSun } from "react-icons/fa";
import { BiSolidMoon } from "react-icons/bi";
import logo from '../images/movielogo.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import {useTheme} from '../contexts/ThemeContext'

function Header() {
    const { isDarkMode, toggleMode } = useTheme();
    const navigate = useNavigate();

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
                        <img src={logo} alt='moviemania' />
                        <span className="brand-name">MovieMania</span>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto ' >
                            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                            <Nav.Link as={NavLink} to='/movies/popular'>Popular </Nav.Link>
                            <Nav.Link as={NavLink} to='/movies/top'>Top Rated</Nav.Link>
                            <Nav.Link as={NavLink} to='/movies/upcoming'>Upcoming</Nav.Link>
                        </Nav>
                        <Nav className='ms-auto'>
                            {isDarkMode ? (
                                <FaRegSun style={{ width: '25px', height: '25px', color: 'white', padding: '5px', border: '1px solid grey', cursor: 'pointer' }} onClick={toggleMode} />
                            ) : (

                                <BiSolidMoon style={{ width: '25px', height: '25px', color: 'black', padding: '5px', border: '1px solid grey', cursor: 'pointer' }} onClick={toggleMode} />
                            )}
                        </Nav>
                    </Navbar.Collapse>
                    <Form onSubmit={handleSubmit} className="d-flex">
                        <Form.Control
                            style={{ marginLeft: '20px' }}
                            type="search"
                            placeholder="Search Movies..."
                            className="me-2"
                            aria-label="Search"
                            name='search'
                        />
                        <Button variant="outline-secondary" type="submit">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
