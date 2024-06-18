import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Container, Row,Col } from 'react-bootstrap';
import Moviecard from './components/Card';

function App() {

  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Row xs={1} md={2} lg={4} className="g-4">
            {Array.from({ length: 8 }).map((_, idx) => (
              <Col key={idx}>
                <Moviecard />
              </Col>
            ))}
          </Row>
        </Container>

      </main>

    </>
  )
}

export default App
