import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import placeholder from '../images/backup-films.jpg'; // Assuming you have a placeholder image for posts without an image

function Post({ post }) {
    const navigate = useNavigate();
    const { _id, title, content, user, timestamp, image_url } = post;
    const image = image_url || placeholder; 
    const formattedTimestamp = new Date(timestamp).toLocaleDateString("en-US"); 

    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {content.length > 100 ? content.substring(0, 100) + '...' : content}
                </Card.Text>
                <Card.Text>
                    <small className="text-muted">Posted on {formattedTimestamp}</small>
                </Card.Text>
                <Button variant="primary" onClick={() => navigate(`/post/${_id}`)}>Read More</Button>
            </Card.Body>
        </Card>
    );
}

export default Post;