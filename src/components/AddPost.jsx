import React, { useState, useReducer } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FormContainer from './FormContainer';
import { useTheme } from '../contexts/ThemeContext';
import { useTitle } from '../hooks/useTitle';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    posts: [],
};

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_POST':
            
            return { ...state, posts: [action.payload, ...state.posts] };
        default:
            return state;
    }
}

const AddPost = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate();
    const { isDarkMode } = useTheme();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image_url, setImageUrl] = useState('');

    useTitle('Add a Post');
    


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = { title, content, image_url, user: '66773ce752abd6506c4db2fa' }; 

        try {
            const response = await axios.post('https://dahal-hom-mediumclone-backend.onrender.com/api/v1/posts', newPost);
            const createdPost = response.data;
            // Dispatch an action to add the new post
            dispatch({ type: 'ADD_POST', payload: createdPost });
            toast.success("Post added successfully. Taking you to post page now", { autoClose: 4000});
            setTimeout(() => navigate('/'), 4000);
        } catch (error) {
            console.error("Error adding new post:", error);
            toast.error("Failed to add the post.")
        }
    };

    return (
        <main className={`py-3 ${isDarkMode ? 'dark-mode-class' : ''}`}>
            <ToastContainer />
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
            <div>
                    {state.posts.map((post, index) => (
                        <div key={index}>
                            <h2>Bingo - Post added</h2>
                            <p>{post.content}</p>
                            {post.image_url && <img src={post.image_url} alt={post.title} />}
                        </div>
                    ))}
                </div>
        </Container>
        </main>
    );
};

export default AddPost;
