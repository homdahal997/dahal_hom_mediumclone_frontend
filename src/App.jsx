import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Container } from 'react-bootstrap';

function App() {

  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Welcome to my API React Application</h1>
        </Container>

      </main>

    </>
  )
}

export default App
