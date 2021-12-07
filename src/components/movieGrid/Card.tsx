import { Movie } from '../../models/Movie'

interface Props {
	movie: Movie;
}

const Card = ({ movie }: Props) => (
	<section className="card">
		<div className="image"> image </div>
		<h3> {movie.title} </h3>
		<p> {movie.premiereDate} </p>
	</section>
)

export default Card
