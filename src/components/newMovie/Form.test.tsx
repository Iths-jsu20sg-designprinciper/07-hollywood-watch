import { render } from '@testing-library/react';
import { mount } from 'enzyme'
import Form from './Form'
import App from '../../App'
import { Movie } from '../../models/Movie'
import { Provider } from 'react-redux'
import { store } from '../../store'

describe('Form component (add new movie)', () => {

	it('renders without errors', () => {
		render(<Provider store={store}> <Form /> </Provider>)
	})
	it('adds a new Movie', () => {
		// let addMock = jest.fn()
		const wrapper = mount((
			<Provider store={store}>
				<App />
			</Provider>
		))
		const cardsBefore = wrapper.find('.card-grid > *').length
		const testMovie: Movie = {
			id: 0,
			title: 'Shawn of the dead',
			premiereDate: '2007',
			imageUrl: 'test.jpg'
		}

		const titleElement = wrapper.find('.new-movie-form [test-data="title"] input')
		titleElement.simulate('change', { target: { value: testMovie.title }})

		const premiereElement = wrapper.find('.new-movie-form [test-data="premiereDate"] input')
		premiereElement.simulate('change', { target: { value: testMovie.premiereDate }})

		const imageElement = wrapper.find('.new-movie-form [test-data="imageUrl"] input')
		imageElement.simulate('change', { target: { value: testMovie.imageUrl }})

		wrapper.find('.new-movie-form button').simulate('click')

		
		const movieCards = wrapper.find('.card-grid > *')
		expect( movieCards.length ).toBe( cardsBefore + 1 )
		// expect(addMock.mock.calls.length).toBe(1)
		// const values = addMock.mock.calls[0][0]
		// expect(isMovie(values)).toBe(true)
		// expect(values.title).toBe(testMovie.title)
		// expect(values.premiereDate).toBe(testMovie.premiereDate)
		// expect(values.imageUrl).toBe(testMovie.imageUrl)

		// Skapa en mock function
		// Skriv in i fält: (id), title, premiereData, imageUrl
		// Klicka på knapp
		// Kontrollera att mock funktionen anropas med rätt värden
	})
	// it cannot add movie if any form value is invalid

})

function isMovie(maybe: any): boolean {
	if( (typeof maybe) !== 'object' ) {
		return false;
	} else if( !maybe.title || !maybe.premiereDate || !maybe.imageUrl ) {
		return false;
	}
	return true
}