import React from 'react';
import { NavBar, FeaturedImage, Services, About, ChatBot, Samples } from './components/components';
import './App.module.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <FeaturedImage />
      <Services />
      <About />
      <ChatBot />
      <Samples />
    </div>
  );
}

export default App;
