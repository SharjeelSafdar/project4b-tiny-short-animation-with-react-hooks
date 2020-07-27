import React from 'react';
import { NavBar, FeaturedImage, Services, About, ChatBot } from './components/components';
import './App.module.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <FeaturedImage />
      <Services />
      <About />
      <ChatBot />
    </div>
  );
}

export default App;
