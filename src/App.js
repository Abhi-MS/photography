import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import { GALLERY_IMAGES } from './utils/images';
import { preloadCriticalImages } from './utils/imageOptimization';

function App() {
  useEffect(() => {
    // Preload only the first 2 critical images
    const criticalImageSources = GALLERY_IMAGES.slice(0, 2).map(img => img.src);
    preloadCriticalImages(criticalImageSources, 2);
  }, []);

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
