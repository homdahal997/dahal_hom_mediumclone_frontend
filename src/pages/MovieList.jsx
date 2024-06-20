import { fetchAPIData } from '../hooks/fetchAPIData'
import { useTitle } from '../hooks/useTitle'
import { Container, Row, Col } from 'react-bootstrap';
import Moviecard from '../components/Card';
import { useTheme } from '../contexts/ThemeContext';

export const MovieList = ({ apiPath, title }) => {
    const { isDarkMode, toggleMode } = useTheme();
    const { data: movies } = fetchAPIData(apiPath);
    useTitle(title);

    return (
        <main className='py-3' >
            <Container>
                <h1 style={{marginBottom: '50px'}}>{title}</h1>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {movies ? movies.map((m) => (
                        <Col sm={12} md={6} lg={4} xl={3} key={m.id}>
                            <Moviecard key={m.id} movie={m} />
                        </Col>
                    )) : 
                    <Col><p>Loading movies...</p></Col>}
                </Row>
            </Container>
        </main>
    );
}

export default MovieList;
