import { useNavigate } from 'react-router-dom';
import FormContainer from './FormContainer';
import { useTheme } from '../contexts/ThemeContext';
import { useTitle } from "../hooks/useTitle";
import { Form, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

        try {
            users.push(userData);
            localStorage.setItem('users', JSON.stringify(users));
            toast.success("Registration successful. Taking you to login page", { autoClose: 4000 });
            setTimeout(() => navigate('/login'), 4000);
        } catch (error) {
            // Handle failed registration error
            console.error("Error during registration:", error);
            toast.error("Failed to register. Please try again.");
        }
    };

    return (
        <main className={`py-3 ${isDarkMode ? 'dark-mode-class' : ''}`}>
            <ToastContainer />
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