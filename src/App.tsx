import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Grid from './components/movieGrid/Grid'
import Form from './components/newMovie/Form'
import { defaultMovies } from './data/defaultMovies'
import { Movie } from './models/Movie'

function App() {
	const [searchString, setSearchString] = useState<string>('')
	const [movies, setMovies] = useState<Movie[]>(defaultMovies)
	
	function addMovie(movie: Movie): void {
		// movies.push(movie) - fel! Muterar arrayen
		console.log('addMovie')
		setMovies( [ ...movies, movie ] )
	}
	
	return (
		<div className="component">
			<Header />
			<Form addMovie={addMovie} />
			<Grid searchString={searchString} movies={movies} />
		</div>
	);
}

export default App;
