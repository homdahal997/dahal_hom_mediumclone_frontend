import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '../contexts/ThemeContext';
import { fetchPostsData } from '../hooks/fetchDataAPI';
import { useTitle } from '../hooks/useTitle';
import Post from '../components/post';

export const PostList = ({ title }) => {
    const { isDarkMode } = useTheme();
    const { data: posts } = fetchPostsData();
    useTitle(title);

    return (
        <main className={`py-3 ${isDarkMode ? 'dark-mode-class' : ''}`}>
            <Container>
                <h1 style={{ marginBottom: '50px' }}>{title}</h1>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {posts ? posts.map((post) => (
                        <Col sm={12} md={6} lg={4} xl={3} key={post._id}>
                            <Post key={post._id} post={post} />
                        </Col>
                    )) : 
                    <Col><p>Loading posts...</p></Col>}
                </Row>
            </Container>
        </main>
    );
}

export default PostList;