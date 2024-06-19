import { Container, Row, Col } from 'react-bootstrap';
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
                <Col xs={6}> <img style={{width: '400px', height: '600px', margin: '50px'}} src={image} alt={movie.title} /></Col>
                <Col xs={6}>
                <h1 style={{margin: '50px'}}>{movie.title}</h1>
                <p>{movie.overview}</p>
                </Col>
            </Row>

        </Container>
    )
}
export default MovieDetail