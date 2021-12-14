import Card from './Card'
import { Movie } from '../../models/Movie'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'


interface Props {
	movies: Movie[];
}

const Grid = ({ movies }: Props) => {
	const searchString = useSelector((state: RootState) => state.searchString)
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
