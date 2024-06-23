import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import FormContainer from '../components/FormContainer'; 

function LoginPage() {
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
        <FormContainer> 
            <Form onSubmit={handleSubmit}>
                
                <Button type="submit">Login</Button>
            </Form>
        </FormContainer>
    );
}

export default LoginPage;