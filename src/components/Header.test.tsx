import { render } from '@testing-library/react';
import { mount } from 'enzyme'
import Header from './Header'
import { Provider } from 'react-redux'
import { store } from '../store'

describe('Header component', () => {

	it('renders without errors', () => {
		// smoke test
		render(<Provider store={store}> <Header /> </Provider>)
	})

	it('renders empty input initially', () => {
		// white box test - vi använder vår kunskap om att det finns ett input-fält
		const wrapper = mount(<Provider store={store}> <Header /> </Provider>)
		const input = wrapper.find('input')
		expect( input.exists() ).toBe(true)
		
		const value = input.render().val()
		expect( value ).toBe('')
	})
})