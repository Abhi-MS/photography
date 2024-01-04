import React from 'react';
import './App.css';
import Header from './src/components/Header';
import Projects from './src/components/Projects';
import Contact from './src/components/Contact';
import Footer from './src/components/Footer';
import Home from './src/components/Home';

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
