import Card from './Card'
import { Movie } from '../../models/Movie'

const data: Movie[] = [
	{ id: 1, title: 'My Neighbor Totoro', premiereDate: '1988', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg' },
	{ id: 2, title: 'Spirited Away', premiereDate: '2001', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png' },
	{ id: 3, title: "Howl's Moving Castle", premiereDate: '2004', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a0/Howls-moving-castleposter.jpg' },
	{ id: 4, title: 'My Neighbor Totoro', premiereDate: '1988', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg' },
	{ id: 5, title: 'Spirited Away', premiereDate: '2001', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png' },
	{ id: 6, title: "Howl's Moving Castle", premiereDate: '2004', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a0/Howls-moving-castleposter.jpg' }
]

const Grid = () => {
	// const testData: Movie = { title: '', premiereDate: '', imageUrl: '' }
	return (
		<main className="card-grid">
			{data.map(movie => (
				<Card key={movie.id} movie={movie} />
			))}
			
		</main>
	)
}

export default Grid
