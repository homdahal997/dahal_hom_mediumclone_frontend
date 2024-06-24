import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../images/logocc.png'
import { BsArrowUpCircle } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa'; 

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', 
        });
    };
    return (
        <footer>
            {/* https://react-bootstrap.github.io/docs/components/navbar */}
            <Navbar bg='' variant='light' expand='lg' collapseOnSelect className="myCustomNavbarFooter">
                <Container>
                    <Navbar.Brand href='/'>
                        <img src={logo} alt='moviemania' />
                        Content Craft </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                        <Nav.Link href='/' disabled style={{color: 'black'}}>Designed with <FaHeart style={{margin: '0 5px', verticalAlign: 'middle', color:'red'}} /> by <strong>Hom Dahal</strong></Nav.Link>
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
