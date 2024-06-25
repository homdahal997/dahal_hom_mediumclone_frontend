import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { useTheme } from '../contexts/ThemeContext';

/**
 * This function component, PostDetail, fetches and displays details of a specific blog post.
 * It utilizes various hooks for theme management, URL parameters, and state management.
 * Upon mounting, it fetches the post data from an API and sets it in the state.
 * The component renders the post's title, image, timestamp, and content.
 */

function PostDetail() {
    const { isDarkMode, toggleMode } = useTheme();
    const params = useParams();
    const [post, setPost] = useState({});
    const pageTitle = useTitle(post.title);
    const image = post.image_url;
    useEffect(() => {
        async function fetchPost() {
            const response = await fetch(`https://dahal-hom-mediumclone-backend.onrender.com/api/v1/posts/${params.id}`); 
            const json = await response.json()
            setPost(json);
            console.log(json);
        }
        fetchPost();
    }, [params.id]);
    return (
        <main className={`py-3 ${isDarkMode ? 'dark-mode-class' : ''}`} >
        <Container>
            <Row>
                <Col xs={6}> <img style={{ width: '500px', height: '700px', margin: '50px' }} src={image} alt={post.title} /></Col>
                <Col xs={6}>
                    <h1 style={{ margin: '50px 0 10px 0' }}>{post.title}</h1>
                    <p>{new Date(post.timestamp).toLocaleDateString()} {new Date(post.timestamp).toLocaleTimeString()}</p>
                    <p style={{ marginBottom: '20px' }}>{post.content}</p>

                </Col>
            </Row>

        </Container>
        </main>
    )
}
export default PostDetail