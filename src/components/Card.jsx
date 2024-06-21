import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import placeholder from '../images/backup-films.jpg';

function Moviecard({ movie }) {
    const navigate = useNavigate();
    const {id, original_title, overview, poster_path} = movie;
    const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : placeholder;
    return (
        <Card>
            <Card.Img style={{height:'300px'}} variant="top" src={image} />
            <Card.Body>
                <Card.Title>{original_title.substring(0,22) + '...'}</Card.Title>
                <Card.Text>
                    {overview.length > 50 ? overview.substring(0, 50) + '...' : overview}
                </Card.Text>
                <Button variant="primary" onClick={() => navigate(`/movie/${id}`)}>View Details</Button>
            </Card.Body>
        </Card>
    );
}

export default Moviecard;