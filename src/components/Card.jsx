import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import placeholder from '../images/backup-films.jpg';

function Moviecard({ movie }) {
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
                <Link to={`/movie/${id}`} style={{ textDecoration: 'none' }}>
                    <Button variant="primary">View Details</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default Moviecard;