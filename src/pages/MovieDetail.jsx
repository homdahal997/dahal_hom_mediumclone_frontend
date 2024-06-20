import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import placeholder from '../images/backup-films.jpg';

function MovieDetail() {
    const params = useParams();
    const [movie, setMovie] = useState({});
    const pageTitle = useTitle(movie.title);
    const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : placeholder;
    useEffect(() => {
        async function fetchMovie() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=57ea2093436edcb66707b775d94664ff`);
            const json = await response.json()
            setMovie(json);
            console.log(json);
        }
        fetchMovie();
    }, [params.id]);
    return (
        <Container>
            <Row>
                <Col xs={6}> <img style={{ width: '500px', height: '700px', margin: '50px' }} src={image} alt={movie.title} /></Col>
                <Col xs={6}>
                    <h1 style={{ margin: '50px 0 10px 0' }}>{movie.title}</h1>
                    <p style={{ marginBottom: '20px' }}>{movie.overview}</p>
                    {<hr />}

                    <h4 style={{ marginBottom: '10px' }}>Movie Generes</h4>
                    {movie.genres ? (
                        <p>
                            {movie.genres.map((genre) => (
                                <Badge style={{ margin: '10px', padding: '10px' }} bg="secondary">{genre.name}</Badge>
                            ))}
                        </p>
                    ) : ""}
                    {<hr />}

                    <h4 style={{ marginBottom: '20px' }}>Movie Reviews</h4>
                    <p><strong>Rating : </strong>{movie.vote_average}</p>
                    <span style={{ marginBottom: '20px' }}><strong>Reviewed By : </strong>{movie.vote_count} Reviewers</span>
                    {<hr />}
                    <h4>Other Details</h4>
                    <Table striped bordered hover style={{ marginTop: '20px' }}>
                        <tbody>
                            <tr>
                                <td><strong>Runtime</strong></td>
                                <td>{movie.runtime} Minutes</td>
                            </tr>
                            <tr>
                                <td><strong>Budget</strong></td>
                                <td>{movie.budget}</td>
                            </tr>
                            <tr>
                                <td><strong>Revenue</strong></td>
                                <td>{movie.revenue}</td>
                            </tr>
                            <tr>
                                <td><strong>Release Date</strong></td>
                                <td>{movie.release_date}</td>
                            </tr>
                        </tbody>
                    </Table>

                    <h5>For further details</h5>
                    <div className="d-grid gap-2">
                        <Button style={{marginBottom: '20px'}}  variant="primary" size="lg">
                        <a style={{color:'white'}} href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer">Explore on IMDB.com</a>
                        </Button>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}
export default MovieDetail