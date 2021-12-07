import React from 'react';
import './App.css';
import Header from './components/Header';
import Grid from './components/movieGrid/Grid'

function App() {
	return (
		<div className="component">
			<Header />

			<Grid />
		</div>
	);
}

export default App;
