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
                <h1 style={{ marginBottom: '50px' }}>Search Results for {queryTerm}</h1>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {movies.map((m) => (
                        <Col>
                        <Moviecard key={m.id} movie={m} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </main>

    )
}
export default Search