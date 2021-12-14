// import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Grid from './components/movieGrid/Grid'
import Form from './components/newMovie/Form'

function App() {
	
	// Detta görs i feature-filen movies.ts och i Form-komponenten i stället
	// function addMovie(movie: Movie): void {
	// 	// movies.push(movie) - fel! Muterar arrayen
	// 	console.log('addMovie')
	// 	setMovies( [ ...movies, movie ] )
	// }
	
	return (
		<div className="component">
			<Header />
			<Form />
			<Grid />
		</div>
	);
}

export default App;
