import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setAuth } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5050/api/v1/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            setAuth({ user: data.user, token: data.token });
            navigate('/profile');
        } catch (error) {
            console.error(error);

        }
    };

    return (
        <Container >
            <Row className='justify-content-md-center'>
                <Col >
                    <Form style={{border: '1px solid grey', padding: '25px', borderRadius:'25px', margin: '50px'}} xs={12} md={6} onSubmit={handleSubmit}>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button style={{width: '100%', marginTop: '55px'}} variant="primary" type="submit">
                            Login
                        </Button>
                        <Row className="py-3">
                            <Col style={{marginTop: '25px', float: 'right'}}>
                                New to Content Craft ? <a href="/register">Register</a>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>

    );
}

export default LoginForm;