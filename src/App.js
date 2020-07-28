import React from 'react';
import {
	NavBar, FeaturedImage, Services, About, ChatBot,
	Samples, CaseStudies, Blogs, Reviews, Contact, Footer
} from './components/components';
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
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
