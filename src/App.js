import React from 'react';
import { NavBar, FeaturedImage, Services } from './components/components';
import './App.module.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <FeaturedImage />
      <Services />
    </div>
  );
}

export default App;
