import React from 'react';
import Header from './Components/Header';
import FeaturedSection from './Components/FeaturedSection';
import ProjectGrid from './Components/ProjectGrid';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <FeaturedSection />
      <ProjectGrid />
      <Footer />
    </div>
  );
}

export default App;
