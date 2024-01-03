import React from 'react';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
