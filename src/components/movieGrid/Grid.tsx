import Card from './Card'
import { Movie } from '../../models/Movie'

const Grid = () => {
	const testData: Movie = { title: '', premiereDate: '', imageUrl: '' }
	return (
		<main className="card-grid">
			<Card movie={testData} />
			<Card movie={testData} />
			<Card movie={testData} />
			<Card movie={testData} />
			<Card movie={testData} />
			<Card movie={testData} />
			
		</main>
	)
}

export default Grid
