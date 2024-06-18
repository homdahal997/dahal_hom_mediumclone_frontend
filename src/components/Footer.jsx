import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../images/movielogo.png'
import { BsArrowUpCircle } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa'; 

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // For smooth scrolling
        });
    };
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
                        <Nav.Link href='/' disabled style={{color: 'black'}}>Designed with <FaHeart style={{margin: '0 5px', verticalAlign: 'middle', color:'red'}} /> by <strong>Hom Dahal</strong></Nav.Link>
                        </Nav>
                        <Nav className='ms-auto'>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/'>Polpular</Nav.Link>
                            <Nav.Link href='/'>Top Rated</Nav.Link>
                            <Nav.Link href='/'>Upcoming</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    {/* Scroll to Top Button */}
                    <button style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000',backgroundColor:'red' }} onClick={scrollToTop} className="btn btn-light">
                        <BsArrowUpCircle size={30} />
                    </button>
                </Container>
            </Navbar>
        </footer>
    );
};

export default Footer;
