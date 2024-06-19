import { fetchAPIData } from '../hooks/fetchAPIData'
import { useTitle } from '../hooks/useTitle'
import { Container, Row, Col } from 'react-bootstrap';
import Moviecard from '../components/Card';

export const MovieList = ({ apiPath, title }) => {
    const { data: movies } = fetchAPIData(apiPath);
    useTitle(title);

    return (
        <main className='py-3'>
            <Container>
                <h1 style={{marginBottom: '50px'}}>{title}</h1>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {movies ? movies.map((m) => (
                        <Col key={m.id}>
                            <Moviecard key={m.id} movie={m} />
                        </Col>
                    )) : <p>Loading movies...</p>}
                </Row>
            </Container>
        </main>
    );
}

export default MovieList;
