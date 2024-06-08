import React from 'react';
import './App.css';
import { Container } from '@mui/material';
import Navbar from './components/header';
import Banner from './components/banner';
import About from './components/about';
import Habilities from './components/habilities';
import Contact from './components/contact';
import Projects from './components/projects';

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Banner />
        
      </Container>
      <About />
      <Container>
        <Projects />
        <Habilities />
        <Contact />
      </Container>
    </>
  );
}

export default App;
