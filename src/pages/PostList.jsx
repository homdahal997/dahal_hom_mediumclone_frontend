import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useTheme } from '../contexts/ThemeContext';
import { useFetchPostsData } from '../hooks/fetchDataAPI';
import { useTitle } from '../hooks/useTitle';
import Post from '../components/post';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const PostList = ({ title }) => {
    const BASE_URL = 'https://dahal-hom-mediumclone-backend.onrender.com/api/v1/posts'
    const { isDarkMode } = useTheme();
    const fetchedData = useFetchPostsData();
    const [posts, setPosts] = useState(fetchedData.data);
    const [showModal, setShowModal] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);
    useTitle(title);

    useEffect(() => {
        setPosts(fetchedData.data);
    }, [fetchedData.data]);

    // Delete post
    const deletePost = async (postId) => {
        try {
            await axios.delete(`${BASE_URL}/${postId}`);
            setPosts(currentPosts => currentPosts.filter(post => post._id !== postId));
            toast.success("Post deleted successfully");
        } catch (error) {
            console.error("Error deleting post:", error);
            toast.error("Error deleting post");
        }
    }

    // Update post
    const updatePost = async (postId, updatedData) => {
        try {
            const response = await axios.put(`${BASE_URL}/${postId}`, updatedData);
            console.log("Response data:", response.data); 
            setPosts(currentPosts => currentPosts.map(post => post._id === postId ? { ...post, ...response.data } : post));
            setShowModal(false); 
            toast.success("Post updated successfully");
        } catch (error) {
            console.error("Error updating post:", error);
            toast.error("Error updating post");
        }
    };

    const handleShowModal = (post) => {
        setCurrentPost(post);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>

        <main className={`py-3 ${isDarkMode ? 'dark-mode-class' : ''}`}>
            
            <Container>
                <h1 style={{ marginBottom: '50px' }}>{title}</h1>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {posts ? posts.map((post) => (
                        <Col sm={12} md={6} lg={4} xl={3} key={post._id}>
                            <Post key={post._id} post={post} />
                            <RiDeleteBin5Line onClick={() => deletePost(post._id)} style={{ cursor: 'pointer',color:'red', marginRight: '10px' }} />
                            <FaEdit onClick={() => handleShowModal(post)} style={{ cursor: 'pointer', color : 'green' }} />
                        </Col>
                    )) :
                        <Col><p>Loading posts...</p></Col>}
                </Row>
            </Container>

            {currentPost && (
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(e) => {
                            e.preventDefault();
                            const updatedData = {
                                title: e.target.title.value,
                                content: e.target.content.value,
                                image_url : e.target.image_url.value
                            };
                            console.log("Updating post:", currentPost._id, updatedData); 
                            updatePost(currentPost._id, updatedData);
                        }}>
                            <Form.Group>
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" name="title" defaultValue={currentPost.title} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Content</Form.Label>
                                <Form.Control as="textarea" name="content" rows={3} defaultValue={currentPost.content} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control type="text" name="image_url" defaultValue={currentPost.image_url} />
                            </Form.Group>
                            <Button style={{marginTop: '10px'}} variant="primary" type="submit">
                                Save Changes
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </main>
        <ToastContainer />
        </>
    );
}

export default PostList;
