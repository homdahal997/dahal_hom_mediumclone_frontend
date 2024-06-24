import { useNavigate } from 'react-router-dom';
import FormContainer from './FormContainer';
import { useTheme } from '../contexts/ThemeContext';
import { useTitle } from "../hooks/useTitle";
import { Form, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function RegisterForm() {
    const navigate = useNavigate();
    const { isDarkMode, toggleMode } = useTheme();
    const pageTitle = useTitle("register");

    const handleSubmit = (e) => {
        e.preventDefault();


        const email = e.target.email.value;
        const password = e.target.password.value;
        const userData = { email, password };


        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.some(user => user.email === email)) {
            alert('Email is already registered. Please use a different email.');
            return;
        }

        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));

        navigate('/login');
    };

    return (
        <main className={`py-3 ${isDarkMode ? 'dark-mode-class' : ''}`}>
            <Container style={{ height: '100vh' }}>
                <FormContainer >
                    <h1 style={{ textAlign: 'center' }}>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <Form.Group className='my-2'>
                            <input style={{ width: '100%', padding: '10px', marginTop: '50px' }} type="email" name="email" required placeholder="Email" />
                        </Form.Group>
                        <Form.Group className='my-2'>
                            <input style={{ width: '100%', padding: '10px', marginTop: '50px' }} type="password" name="password" required placeholder="Password" />
                        </Form.Group>
                        <button style={{ width: '100%', backgroundColor: 'blue', color: 'white', padding: '10px', marginTop: '50px' }} type="submit">Register</button>
                    </form>
                    <Row className='py-3'>
                        <Col>
                            Already have an account?{' '}
                            <Link to='/Login'>
                                Login
                            </Link>
                        </Col>
                    </Row>
                </FormContainer>
            </Container>
        </main>
    )
}
export default RegisterForm