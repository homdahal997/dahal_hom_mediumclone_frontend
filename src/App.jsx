import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer';
import { Container, Row,Col } from 'react-bootstrap';
import Moviecard from './components/Card';
import MyRoutes from './routes/MyRoutes';

function App() {

  return (
    <>
      <Header />
      <MyRoutes />
      {/* <main className='py-3'>
        <Container>
          <Row xs={1} md={2} lg={4} className="g-4">
            {Array.from({ length: 8 }).map((_, idx) => (
              <Col key={idx}>
                <Moviecard />
              </Col>
            ))}
          </Row>
        </Container>
        

      </main> */}
      <Footer />
    </>
  )
}

export default App
