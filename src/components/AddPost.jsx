import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FormContainer from './FormContainer';
import { useTheme } from '../contexts/ThemeContext';
import { useTitle } from '../hooks/useTitle';

const AddPost = () => {
    const navigate = useNavigate();
    const { isDarkMode } = useTheme();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image_url, setImageUrl] = useState('');
    const [posts, setPosts] = useState([]);

    useTitle('Add a Post');
    


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = { title, content, image_url, user: '66773ce752abd6506c4db2fa' }; 

        try {
            const response = await axios.post('http://localhost:5050/api/v1/posts', newPost);
            const createdPost = response.data;
            setPosts(posts => [createdPost, ...posts]);
            navigate('/');
        } catch (error) {
            console.error("Error adding new post:", error);
        }
    };

    return (
        <main className={`py-3 ${isDarkMode ? 'dark-mode-class' : ''}`}>
        <Container style={{height: '100vh'}}>
            <FormContainer>
            <h1>Add New Post</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group style={{marginTop: '40px'}} controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </Form.Group>
                <Form.Group style={{marginTop: '40px'}} controlId="formContent">
                    <Form.Label>Content</Form.Label>
                    <Form.Control 
                        style={{height: '200px'}}
                        as="textarea" 
                        rows={3} 
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                        required 
                    />
                </Form.Group>
                <Form.Group style={{marginTop: '40px'}} controlId="formImageUrl">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={image_url} 
                        onChange={(e) => setImageUrl(e.target.value)} 
                    />
                </Form.Group>
                <Button style={{width: '100%', marginTop : '40px', padding: '20px'}} variant="primary" type="submit">
                    Add Post
                </Button>
            </Form>
            </FormContainer>
        </Container>
        </main>
    );
};

export default AddPost;
