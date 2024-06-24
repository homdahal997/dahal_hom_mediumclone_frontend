import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '../contexts/ThemeContext';
import { useFetchPostsData } from '../hooks/fetchDataAPI';
import { useTitle } from '../hooks/useTitle';
import Post from '../components/post';
import axios from 'axios';

export const PostList = ({ title }) => {
    const { isDarkMode } = useTheme();
    const fetchedData = useFetchPostsData();
    const [posts, setPosts] = useState(fetchedData.data); 
    useTitle(title);

    useEffect(() => {
        setPosts(fetchedData.data); 
    }, [fetchedData.data]);

    // delete post
    const deletePost = async(postId) =>{
        try {
            await axios.delete(`http://localhost:5050/api/v1/posts/${postId}`);
            setPosts(currentPosts => currentPosts.filter(post => post._id !== postId));
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    }

    

    return (
        <main className={`py-3 ${isDarkMode ? 'dark-mode-class' : ''}`}>
            <Container>
                <h1 style={{ marginBottom: '50px' }}>{title}</h1>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {posts ? posts.map((post) => (
                        <Col sm={12} md={6} lg={4} xl={3} key={post._id}>
                            <Post key={post._id} post={post} />
                            <button onClick={() => deletePost(post._id)}>Delete</button>
                        </Col>
                    )) : 
                    <Col><p>Loading posts...</p></Col>}
                </Row>
            </Container>
        </main>
    );
}

export default PostList;