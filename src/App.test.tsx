import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme'
import App from './App';
import Header from './components/Header'

test('renders without errors', () => {
  render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
});

it('shows matching movie when typing in the search field', () => {
	// Integration test
	const wrapper = mount(<App />)
	
	// shallow(<Header searchText="" setSearchText={() => {}} />)

	const searchString = 'castle'
	const input = wrapper.find('header input')
	input.simulate('change', { target: { value: searchString } })

	const cards = wrapper.find('main.card-grid .card')
	const titles = cards.find('h3')
	expect(titles.length).toBe(2)

	titles.forEach(title => {
		const actualTitle = title.text()
		expect(actualTitle).toMatch(searchString)
	})
})