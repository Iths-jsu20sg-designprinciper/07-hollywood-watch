import { render } from '@testing-library/react';
import Grid from './Grid'

describe('Grid component', () => {

	it('renders without errors', () => {
		render(<Grid />)
	})

	// TODO: hur testa att grid renderar cards med rätt data?
})