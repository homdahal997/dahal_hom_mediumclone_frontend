import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Post({ post }) {
    const navigate = useNavigate();
    const { _id, title, content, user, timestamp, image_url } = post;
    const image = image_url; 
    const formattedTimestamp = new Date(timestamp).toLocaleDateString("en-US"); 

    return (
        <Card>
            <Card.Img style={{height : '200px'}} variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title.length > 20 ? title .substring(0,23) + '...': title}</Card.Title>
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