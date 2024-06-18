import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import placeholder from '../images/backup-films.jpg';

function Moviecard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img className='myplaceholder' variant="" src={placeholder} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default Moviecard;