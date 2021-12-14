import Card from './Card'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'


// interface Props {
// 	movies: Movie[];
// }

const Grid = () => {
	const searchString = useSelector((state: RootState) => state.searchString)
	const movies = useSelector((state: RootState) => state.movies)
	const filteredData = movies.filter(movie => movie.title.toLowerCase().includes(searchString.toLowerCase()))
	// "Howl's Moving Castle" === "castle"
	// "Castle" !== "castle"
	
	return (
		<main className="card-grid">
			{filteredData.map(movie => (
				<Card key={movie.id} movie={movie} />
			))}
			
		</main>
	)
}

export default Grid
