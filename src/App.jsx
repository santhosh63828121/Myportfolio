import React from 'react';
import Header from './assets/components/Header';
import Home from './assets/components/Home';
import About from './assets/components/About';
import Services from './assets/components/Services';
import Skills from './assets/components/Skills';
import Projects from './assets/components/Project' ;
import Contact from './assets/components/Cantact';
import './App.css';
 // Ensure you have the Boxicons CSS

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Services/>
      <Projects />
      <Contact />
      
    </div>
  );
}

export default App;