import { useNavigate } from 'react-router-dom';
import FormContainer from './FormContainer';
import { useTheme } from '../contexts/ThemeContext';
import { useTitle } from "../hooks/useTitle";
import { Form, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();
    const { isDarkMode, toggleMode } = useTheme();
    const pageTitle = useTitle("login");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Directly access form values from the event target
        const email = e.target.email.value;
        const password = e.target.password.value;

        // Retrieve users array from local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the email exists and the password matches
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            navigate('/'); 
        } else {
            setError('Invalid email or password.');
        }
    };

    return (
        <>

            <main className={`py-3 ${isDarkMode ? 'dark-mode-class' : ''}`}>
                <Container style={{height: '100vh'}}>
                <h1 style={{ textAlign: 'center' }}>Login</h1>
                            <FormContainer>
                                <form onSubmit={handleSubmit}>
                                    <Form.Group className='my-2'>
                                        <input style={{ width: '100%', padding: '10px', marginTop: '50px' }} type="email" name="email" required placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group className='my-2'>
                                        <input style={{ width: '100%', padding: '10px', marginTop: '50px' }} type="password" name="password" required placeholder="Password" />
                                    </Form.Group>
                                    <button style={{ width: '100%', backgroundColor: 'blue', color: 'white', padding: '10px', marginTop: '50px' }} type="submit">Login</button>
                                </form>
                                <Row className='py-3'>
                                    <Col>
                                        New to Context Craft ? {' '}
                                        <Link to='/register'>
                                            Register
                                        </Link>
                                    </Col>
                                </Row>
                            </FormContainer>
                </Container>
            </main>





        </>
    );

}
export default LoginForm