import { render } from '@testing-library/react';
import { shallow } from 'enzyme'
import Header from './Header'

describe('Header component', () => {

	it('renders without errors', () => {
		// smoke test
		render(<Header searchText="" setSearchText={() => {}} />)
	})

	it('renders empty input initially', () => {
		// white box test - vi använder vår kunskap om att det finns ett input-fält
		const wrapper = shallow(<Header searchText="" setSearchText={() => {}} />)
		const input = wrapper.find('input')
		expect( input.exists() ).toBe(true)
		
		const value = input.render().val()
		expect( value ).toBe('')
	})

})