import { useEffect } from "react";
import page404 from '../images/404-Page-Not-Found.png'
import { Container, Row, Col } from 'react-bootstrap';
function PageNotFound() {

    useEffect(() => {
        document.title = `Page Not Found / MovieMania`;
    });
    return (
        <main className='py-3'>
            <Container>
                <Row>
                    <img style={{width : '550px', height : '550px', display: ''}} src={page404}></img>
                </Row>

            </Container>
        </main>
    )
}
export default PageNotFound