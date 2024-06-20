import { useEffect } from "react";
import page404 from '../images/404-Page-Not-Found.png'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useTheme } from '../contexts/ThemeContext';
function PageNotFound() {
    const { isDarkMode, toggleMode } = useTheme();
    useEffect(() => {
        document.title = `Page Not Found / MovieMania`;
    });
    return (
        <main className={`py-3 ${isDarkMode ? 'dark-mode-class' : ''}`} >
            <Container>
                <Row>
                <Col xs={6}> <img style={{width : '750px', height : '750px', display: ''}} src={page404}></img></Col>
                <Col xs={6}>
                <h3 style={{margin : '50px'}}>Sorry the page you are looking for is either moved elsewhere or completely removed from our server.</h3>
                <div className="d-grid gap-2">
                        <Button style={{marginBottom: '20px', marginLeft: '50px', marginTop : '100px'}}  variant="primary" size="lg">
                        <Link style={{color:'white'}} to='/' rel="noreferrer">Go Back To Home Page</Link>
                        </Button>
                    </div>
                </Col>
                    
                </Row>

            </Container>
        </main>
    )
}
export default PageNotFound