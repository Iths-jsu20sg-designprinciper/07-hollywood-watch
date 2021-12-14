import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme'
import App from './App';
// import { Movie } from './models/Movie'
import { Provider } from 'react-redux'
import { store } from './store'

test('renders without errors', () => {
  render(<Provider store={store}> <App /> </Provider>);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
});

it('shows matching movie when typing in the search field', () => {
	// Integration test
	const wrapper = mount(<Provider store={store}> <App /> </Provider>)
	
	const searchString = 'castle'
	const input = wrapper.find('header input')
	input.simulate('change', { target: { value: searchString } })

	const cards = wrapper.find('main.card-grid .card')
	const titles = cards.find('h3')
	expect(titles.length).toBe(2)

	titles.forEach(title => {
		const actualTitle = title.text()
		expect(actualTitle.toLowerCase()).toMatch(searchString.toLowerCase())
	})
})

describe('Add movie, integration test', () => {

	// it('adds a movie when form button clicked', () => {
	// 	const wrapper = mount(<App />)
	// 	const gridWrapper = wrapper.find('.card-grid > *')
	// 	const lengthBefore = gridWrapper.length

	// 	const testMovie: Movie = {
	// 		id: 0,
	// 		title: 'Shawn of the dead',
	// 		premiereDate: '2007',
	// 		imageUrl: 'test.jpg'
	// 	}

	// 	const titleElement = wrapper.find('[test-data="title"] input')
	// 	titleElement.simulate('change', { target: { value: testMovie.title }})

	// 	const premiereElement = wrapper.find('[test-data="premiereDate"] input')
	// 	premiereElement.simulate('change', { target: { value: testMovie.premiereDate }})

	// 	const imageElement = wrapper.find('[test-data="imageUrl"] input')
	// 	imageElement.simulate('change', { target: { value: testMovie.imageUrl }})

	// 	wrapper.find('.new-movie-form').find('button').simulate('click')
	// 	wrapper.update()
	// 	wrapper.update()
	// 	wrapper.update()
	// 	wrapper.update()
		
	// 	const lengthAfter = gridWrapper.length
	// 	expect(lengthAfter).toBe(lengthBefore + 1)	
	// })
})