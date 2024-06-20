import { useSearchParams } from "react-router-dom";
import { fetchAPIData } from '../hooks/fetchAPIData'
import { useTitle } from "../hooks/useTitle";
import Moviecard from '../components/Card';
import { Container, Row, Col } from 'react-bootstrap';
function Search({ apiPath }) {
    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get("q");
    const { data: movies } = fetchAPIData(apiPath, queryTerm);
    useTitle(`Search result for ${queryTerm}`);

    return (
        <main className='py-3'>
            <Container>
                <h1 style={{ marginBottom: '50px' }}>Search Results for <span style={{ backgroundColor: 'black', color: 'white', padding: '5px' }}>{queryTerm}</span></h1>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {movies.length > 0 ? (
                        movies.map((m) => (
                            <Col key={m.id}>
                                <Moviecard movie={m} />
                            </Col>
                        ))
                    ) : (
                        <Col>
                            <p style={{color: 'purple', fontSize: '30px', display: 'block', whiteSpace: 'nowrap'}}>Sorry...No results found for <span style={{textDecoration: 'line-through'}}>{queryTerm}</span> try searching another movie</p>
                        </Col>
                    )}
                </Row>
            </Container>
        </main>

    )
}
export default Search