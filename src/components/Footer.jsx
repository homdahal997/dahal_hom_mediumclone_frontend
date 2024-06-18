import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../images/movielogo.png'

function Footer() {
    return (
        <footer>
            {/* https://react-bootstrap.github.io/docs/components/navbar */}
            <Navbar bg='' variant='light' expand='lg' collapseOnSelect className="myCustomNavbar">
                <Container>
                    <Navbar.Brand href='/'>
                        <img src={logo} alt='moviemania' />
                        MovieMania </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/'>Polpular</Nav.Link>
                            <Nav.Link href='/'>Top Rated</Nav.Link>
                            <Nav.Link href='/'>Upcoming</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </footer>
    );
};

export default Footer;
