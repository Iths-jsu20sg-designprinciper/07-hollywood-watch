import Card from './Card'
import { Movie } from '../../models/Movie'


interface Props {
	searchString: string;
	movies: Movie[];
}

const Grid = ({ searchString, movies }: Props) => {
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
