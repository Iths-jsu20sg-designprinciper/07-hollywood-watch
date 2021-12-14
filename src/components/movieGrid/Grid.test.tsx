import { Provider } from 'react-redux'
import { store } from '../../store'
import { render } from '@testing-library/react';
import Grid from './Grid'

describe('Grid component', () => {

	it('renders without errors', () => {
		render((
			<Provider store={store}>
				<Grid movies={[]} />
			</Provider>)
		)
	})

	// TODO: hur testa att grid renderar cards med rätt data?
})