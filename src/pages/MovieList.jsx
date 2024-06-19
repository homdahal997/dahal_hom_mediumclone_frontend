import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Moviecard from '../components/Card';

function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=57ea2093436edcb66707b775d94664ff");
                if (!response.ok) {
                    throw new Error('Failed to fetch movies');
                }
                const data = await response.json();
                console.log(data); 
                
                setMovies(data.results || []); 
            } catch (error) {
                console.error('Fetching movies failed:', error);
            }
        }
        fetchMovies();
    }, []);

    return (
        <main className='py-3'>
            <Container>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {movies.map((m) => (
                        <Col key={m.id}> 
                            <Moviecard movie={m} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </main>
    );
}

export default MovieList;
