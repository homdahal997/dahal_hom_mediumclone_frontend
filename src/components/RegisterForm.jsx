import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from './FormContainer';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            alert('Passwords do not match');
            return;
        }

        // Prepare user data
        const userData = {
            username,
            email,
            password,
        };

        // Check if users array exists in local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        // Check if the email is already registered
        if (users.some(user => user.email === email)) {
            setError('Email is already registered. Please use a different email.');
            return;
        }

        // Add the new user to the array and save it back to local storage
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));

        // Navigate to login page after successful registration
        navigate('/login');
    };

    return (
        <FormContainer>
            <h1>Register</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='my-2' controlId='username'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='confirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Confirm password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                {error && <div className="alert alert-danger">{error}</div>}

                <Button type='submit' variant='primary'>
                    Register
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    Already have an account?{' '}
                    <Link to='/login'>
                        Login
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    );
}

export default Register;
