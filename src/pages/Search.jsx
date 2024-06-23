import { useSearchParams } from 'react-router-dom';
import { useFetchPostsData } from '../hooks/fetchDataAPI';
import { useTitle } from '../hooks/useTitle';
import Post from '../components/post';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '../contexts/ThemeContext';

function Search({ apiPath }) {
    const { isDarkMode } = useTheme();
    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get("q");
    const { data: posts = [], error } = useFetchPostsData(queryTerm);
    useTitle(`Search result for ${queryTerm}`);

    return (
        <main className={`py-3 ${isDarkMode ? 'dark-mode-class' : ''}`}>
            <Container style={{ minHeight: '100vh' }}>
                <h1 style={{ marginBottom: '50px' }}>
                    Search Results for <span style={{ backgroundColor: 'black', color: 'white', padding: '5px' }}>{queryTerm}</span>
                </h1>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {error ? (
                        <p style={{ color: 'red' }}>Error: {error}</p>
                    ) : posts.length > 0 ? (
                        posts.map((post) => (
                            <Col key={post._id}>
                                <Post post={post} />
                            </Col>
                        ))
                    ) : (
                        <Col>
                            <p style={{ color: isDarkMode ? 'white' : 'black', fontSize: '30px', display: 'block', whiteSpace: 'nowrap' }}>
                                Sorry...No results found for <span style={{ textDecoration: 'line-through' }}>{queryTerm}</span> try searching another topic
                            </p>
                        </Col>
                    )}
                </Row>
            </Container>
        </main>
    );
}

export default Search;
