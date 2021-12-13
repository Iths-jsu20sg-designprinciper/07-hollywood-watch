import { useState } from 'react'
import { Movie } from '../../models/Movie'

interface Props {
	addMovie: (movie: Movie) => void;
}

const Form = ({ addMovie }: Props) => {
	const [title, setTitle] = useState('')
	const [premiereDate, setPremiereDate] = useState('0000')
	const [imageUrl, setImageUrl] = useState('url.jpg')

	function handleAddClick() {
		const m: Movie = {
			id: 16,
			title: title,
			premiereDate: premiereDate,
			imageUrl: imageUrl
		}

		addMovie(m)
	}
	return (
		<div className="new-movie-form">
			<label test-data="title"> Title
				<input type="text"
					value={title}
					onChange={event => setTitle(event.target.value)}
					/>
			</label>
			<label test-data="premiereDate"> Premiere year
				<input type="text"
					value={premiereDate}
					onChange={event => setPremiereDate(event.target.value)}
					/>
			</label>
			<label test-data="imageUrl"> Image URL
				<input type="text"
					value={imageUrl}
					onChange={event => setImageUrl(event.target.value)}
					/>
			</label>
			<button onClick={handleAddClick}> Add movie </button>
		</div>
	)
}

export default Form
