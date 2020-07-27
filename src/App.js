import React from 'react';
import { NavBar, FeaturedImage, Services, About } from './components/components';
import './App.module.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <FeaturedImage />
      <Services />
      <About />
    </div>
  );
}

export default App;
