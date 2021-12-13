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
	
	function addMovie(movie: Movie): void {}
	
	return (
		<div className="component">
			<Header searchText={searchString} setSearchText={setSearchString} />
			<Form addMovie={addMovie} />
			<Grid searchString={searchString} movies={movies} />
		</div>
	);
}

export default App;
