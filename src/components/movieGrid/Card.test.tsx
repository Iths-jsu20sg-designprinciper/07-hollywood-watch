import { render, screen } from '@testing-library/react';
import Card from './Card'
import { Movie } from '../../models/Movie'

describe('Card component', () => {

	it('renders without errors', () => {
		// smoke test
		const testData: Movie = { id: 1, title: '', premiereDate: '', imageUrl: '' }
		render(<Card movie={testData} />)
	})

	it('renders movie title and premiere date', () => {
		const testData: Movie = { id: 575, title: 'The Shawshank redemption', premiereDate: '1994', imageUrl: '' }
		render(<Card movie={testData} />)
		
		screen.getByText(testData.title, { exact: false })
		screen.getByText(testData.premiereDate, { exact: false })
	})

	// TODO: testa imageUrl
})