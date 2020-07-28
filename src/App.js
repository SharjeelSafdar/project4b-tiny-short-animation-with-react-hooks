import React from 'react';
import { NavBar, FeaturedImage, Services, About, ChatBot, 
  Samples, CaseStudies, Blogs, Reviews } from './components/components';
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
      <CaseStudies />
      <Blogs />
      <Reviews />
    </div>
  );
}

export default App;
