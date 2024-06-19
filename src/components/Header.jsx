import { Navbar, Nav, Container } from 'react-bootstrap';
import { TiAdjustBrightness } from "react-icons/ti";
import logo from '../images/movielogo.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            {/* https://react-bootstrap.github.io/docs/components/navbar */}
            <Navbar bg='' variant='light' expand='lg' collapseOnSelect className="myCustomNavbar">
                <Container>
                    <Navbar.Brand as={NavLink} to='/'>
                        <img src={logo} alt='moviemania' />
                        MovieMania
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <Nav.Link as={NavLink} to='/' exact>Home</Nav.Link>
                            <Nav.Link as={NavLink} to='/movies/popular'>Popular</Nav.Link>
                            <Nav.Link as={NavLink} to='/movies/top'>Top Rated</Nav.Link>
                            <Nav.Link as={NavLink} to='/movies/upcoming'>Upcoming</Nav.Link>
                        </Nav>
                        <Nav className='ms-auto'>
                            <TiAdjustBrightness style={{width:'30px', height: '30px', border:'3px solid grey', borderRadius:'10px', backgroundColor:'whitesmoke'}} />
                        </Nav>
                    </Navbar.Collapse>
                    <Form className="d-flex">
                        <Form.Control
                            style={{ marginLeft: '20px' }}
                            type="search"
                            placeholder="Search Movies..."
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-secondary">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
